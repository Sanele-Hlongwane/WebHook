// app/api/webhooks/clerk/route.ts
import { Webhook } from "svix";
import { WebhookEvent, clerkClient } from "@clerk/clerk-sdk-node";
import { NextResponse } from "next/server";
import { createUser } from "@/lib/actions/user.action";
import { connect } from "@/lib/mongodb";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  const headers = req.headers;
  const svix_id = headers.get("svix-id");
  const svix_timestamp = headers.get("svix-timestamp");
  const svix_signature = headers.get("svix-signature");

  console.log("svix-id:", svix_id);
  console.log("svix-timestamp:", svix_timestamp);
  console.log("svix-signature:", svix_signature);

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', { status: 400 });
  }

  let payload: any;
  try {
    payload = await req.json();
  } catch (err) {
    console.error('Error parsing JSON:', err);
    return new Response('Invalid JSON', { status: 400 });
  }

  const body = JSON.stringify(payload);
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', { status: 400 });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name, username } = evt.data;

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username!,
      firstName: first_name,
      lastName: last_name,
      photo: image_url,
    };

    console.log("New user data:", user);

    console.time("MongoDB Connection");
    try {
      await connect();
      console.timeEnd("MongoDB Connection");

      console.time("User Creation");
      const newUser = await createUser(user);
      console.timeEnd("User Creation");

      if (newUser) {
        await clerkClient.users.updateUserMetadata(id, {
          publicMetadata: {
            userId: newUser._id,
          },
        });
      }

      return NextResponse.json({ message: "New user created", user: newUser });
    } catch (error) {
      console.error('Error saving user data:', error);
      return new Response('Error occurred', { status: 500 });
    }
  }

  console.log(`Webhook with an ID of ${evt.data.id} and type of ${eventType}`);
  console.log('Webhook body:', body);

  return new Response('', { status: 200 });
}
