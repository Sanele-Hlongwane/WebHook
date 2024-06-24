// pages/api/user-events.ts
import { NextApiRequest, NextApiResponse } from 'next';

let clients: NextApiResponse[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  clients.push(res);

  req.on('close', () => {
    clients = clients.filter(client => client !== res);
  });
}

export function sendUserEvent(user: any) {
  clients.forEach(client => {
    client.write(`data: ${JSON.stringify(user)}\n\n`);
  });
}
