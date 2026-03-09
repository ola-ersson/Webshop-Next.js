import 'server-only';
import { ProductList, Product } from '@/app/types';

export async function getProductsList(): Promise<ProductList> {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data: ProductList = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
}

export async function getProduct(productId: string): Promise<Product> {
  try {
    const response = await fetch(`https://dummyjson.com/product/${productId}`);
    const data: Product = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch product');
  }
}

// const services = {
//   getProducts,
//   getProduct,
// };

// export default services;
