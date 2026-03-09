import { Product, ProductList } from '../types';
import ProductCard from './product-card';

export default function ProductListing({
  productsList,
}: {
  productsList: ProductList;
}) {
  const products = productsList.products || [];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
