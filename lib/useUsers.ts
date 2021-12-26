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
      const users: any[] = snapshot.docs.map((d) => ({
        ...d.data(),
        id: d.id,
      }));
      return users[0];
    } catch (error) {
      return null;
    }
  };

  const setUserDetails = async (id: string, user: any): Promise<any> => {
    try {
      await db.collection('users').doc(id).update(user);
      return true;
    } catch (error) {
      return error;
    }
  };

  return { createUser, getUser, setUserDetails };
}
