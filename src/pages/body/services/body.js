import axios from '@/utils/http';

export async function fetchUsers() {
  const response = await axios(`/users`);
  return response.data;
}
