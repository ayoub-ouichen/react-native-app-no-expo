import db from '../database';
import { Product } from '../entities/Product';

export const insertProduct = async (product: Product): Promise<void> => {
  try {
    await db.transaction(async (tx) => {
      await tx.executeSql(
        `INSERT INTO products (name, price) VALUES (?, ?);`,
        [product.name, product.price]
      );
    });
  } catch (error) {
    console.error('Error inserting product:', error);
  }
};

export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM products;`,
        [],
        (_, results) => resolve(results.rows.raw()),
        (_, error) => {
          console.error('Error fetching products:', error);
          reject(error);
          return false;
        }
      );
    });
  });
};
