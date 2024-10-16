const API_URL = 'https://lionfish-app-9yqqg.ondigitalocean.app/api';
// const API_URL = 'http://127.0.0.1:3000/api';

export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

export const fetchCompanies = async () => {
  const response = await fetch(`${API_URL}/companies`);
  if (!response.ok) {
    throw new Error('Failed to fetch companies');
  }
  return response.json();
};

export const processUsers = async () => {
  const response = await fetch(`${API_URL}/users/process_users`, {
    method: 'POST',
  });
  if (!response.ok) {
    throw new Error('Failed to process users');
  }
  return response.json();
};
