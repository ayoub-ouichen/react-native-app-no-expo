import { insertProduct, getProducts } from '../repositories/ProductRepository';
import { Product } from '../entities/Product';

export const addProduct = async (name: string, price: number) => {
  const product: Product = { name, price };
  await insertProduct(product);
};

export const fetchProducts = async (): Promise<Product[]> => {
  return await getProducts();
};
