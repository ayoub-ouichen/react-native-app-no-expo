import SQLite from 'react-native-sqlite-storage';

// Open the database
const db = SQLite.openDatabase(
  { name: 'mydatabase.db', location: 'default' },
  () => console.log('Database opened successfully'),
  error => console.error('Error opening database', error)
);

// Initialize tables
export const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER
      );`,
      [],
      () => console.log('Users table created successfully'),
      error => console.error('Error creating table', error)
    );
  });
};

export default db;
