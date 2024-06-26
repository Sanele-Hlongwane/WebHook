// pages/api/get-users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/lib/mongodb';
import User from '@/lib/modals/user.model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connect();
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}
