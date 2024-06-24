// pages/user.tsx
import { useEffect, useState } from 'react';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { User as ClerkUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';

interface User {
  _id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
}

export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('/api/get-users');
      const data = await response.json();
      setUsers(data.users);
    }

    fetchUsers();

    const eventSource = new EventSource('/api/user-events');

    eventSource.onmessage = function (event) {
      const user: User = JSON.parse(event.data);
      setNewUser(user);
      alert(`New user created: ${user.email}`);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <SignedIn>
        <ul className="list-disc list-inside">
          {users.map(user => (
            <li key={user._id} className="mb-2">
              {user.email}
            </li>
          ))}
        </ul>
        {newUser && (
          <div className="mt-4 p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">New User</h2>
            <p><strong>Email:</strong> {newUser.email}</p>
            <p><strong>Username:</strong> {newUser.username}</p>
            <p><strong>First Name:</strong> {newUser.firstName}</p>
            <p><strong>Last Name:</strong> {newUser.lastName}</p>
            {newUser.photo && (
              <img src={newUser.photo} alt={newUser.username} className="mt-2 w-16 h-16 rounded-full" />
            )}
          </div>
        )}
        <button
          onClick={() => router.push('/')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Back to Home
        </button>
      </SignedIn>
      <SignedOut>
        <p className="text-center text-lg">Please sign in to view users.</p>
      </SignedOut>
    </div>
  );
}
