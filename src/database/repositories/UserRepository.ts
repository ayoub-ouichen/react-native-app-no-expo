import db from '../database';
import { User } from '../entities/User';

export const insertUser = async (user: User): Promise<void> => {
  try {
    await db.transaction(async (tx) => {
      await tx.executeSql(
        `INSERT INTO users (name, email) VALUES (?, ?);`,
        [user.name, user.email]
      );
    });
  } catch (error) {
    console.error('Error inserting user:', error);
  }
};

export const getUsers = async (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM users;`,
        [],
        (_, results) => resolve(results.rows.raw()),
        (_, error) => {
          console.error('Error fetching users:', error);
          reject(error);
          return false;
        }
      );
    });
  });
};
