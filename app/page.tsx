import Hero from './components/hero';
import ProductListing from './components/product-listing';
import { getProductsList } from './services';

export default async function Home() {
  const productsList = await getProductsList();
  return (
    <main>
      <Hero />
      <ProductListing productsList={productsList} />
    </main>
  );
}
