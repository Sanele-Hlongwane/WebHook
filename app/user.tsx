// pages/user.tsx
import { useEffect, useState } from 'react';

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
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.email}</li>
        ))}
      </ul>
      {newUser && (
        <div>
          <h2>New User</h2>
          <p>{newUser.email}</p>
        </div>
      )}
    </div>
  );
}
