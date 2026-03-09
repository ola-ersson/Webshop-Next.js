import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <section>
      <div className='bg-gray-300  p-2 mb-4'>
        <Image
          className='m-auto bg-gray-300'
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={200}
        />
      </div>
      <Link href={`/product/${product.id}`}>
        <h2 className='text-xl font-semibold text-cyan-500  hover:text-cyan-900 mb-2 min-h-14'>
          {product.title}
        </h2>
      </Link>
      <p className='text-gray-400 mb-2'>{product.brand}</p>
      <p className='mb-2'>{product.description}</p>
      <div className='flex w-full justify-between mt-auto'>
        <p className='self-center font-bold'>Price: ${product.price}</p>
        <button
          className='bg-cyan-700 hover:bg-cyan-900 text-white py-2 px-4 rounded mt-2'
          // onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
