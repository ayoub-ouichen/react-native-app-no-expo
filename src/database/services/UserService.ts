import { insertUser, getUsers } from '../repositories/UserRepository';
import { User } from '../entities/User';

export const addUser = async (name: string, email: string) => {
  const user: User = { name, email };
  await insertUser(user);
};

export const fetchUsers = async (): Promise<User[]> => {
  return await getUsers();
};
