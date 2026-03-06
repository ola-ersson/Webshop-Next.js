import Image from 'next/image';
import Hero from './components/hero';
import ProductListing from './components/product-listing';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductListing />
    </main>
  );
}
