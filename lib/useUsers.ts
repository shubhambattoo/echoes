import { db } from '../firebase';
import { User } from '../types';

export default function useUsers() {
  const createUser = async (user: User) => {
    try {
      await db.collection('users').add(user);
      return true;
    } catch (error) {
      return false;
    }
  };

  const getUser = async (email: string): Promise<User> => {
    try {
      const snapshot = await db
        .collection('users')
        .where('email', '==', email)
        .get();
      const users: any[] = snapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
      return users[0];
    } catch (error) {
      return null;
    }
  };

  return { createUser, getUser };
}
