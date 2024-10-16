import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const usersData = await fetchUsers();
      setUsers(usersData);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Users</h1>
      {loading && <p className="text-center text-gray-500">Loading users...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.length > 0 ? (
          users.map(user => (
            <div key={user.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
              <h2 className="text-xl font-semibold mb-2">{user.first_name} {user.last_name}</h2>
              <p className="text-gray-700 mb-1"><strong>Email:</strong> {user.email}</p>
              <p className="text-gray-700 mb-1"><strong>Company ID:</strong> {user.company_id}</p>
              <p className="text-gray-700 mb-1"><strong>Tokens:</strong> {user.tokens}</p>
              <p className="text-gray-700 mb-1">
                <strong>Email Status:</strong> 
                {user.email_status ? (
                  <span className="text-green-500"> Active</span>
                ) : (
                  <span className="text-red-500"> Inactive</span>
                )}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Active Status:</strong> 
                {user.active_status ? (
                  <span className="text-green-500"> Active</span>
                ) : (
                  <span className="text-red-500"> Inactive</span>
                )}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
