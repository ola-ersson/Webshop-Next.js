import { Heart, ShoppingCart } from 'lucide-react';
import HeaderNav from './header-nav';

export default function Header() {
  const cart = [];
  const wishlist = [1];
  return (
    <header className='grid grid-cols-[1fr_auto_1fr] items-center p-2 bg-gray-900 text-gray-300 sticky top-0 z-1'>
      <a href='/'>
        <span className='ml-4'>Lexicon Webstore</span>
      </a>
      <HeaderNav className='justify-self-center w-fit' />
      <div className='flex'>
        <button
          type='button'
          className='flex items-center ml-auto bg-cyan-800 rounded-3xl py-1 pl-1 pr-3'
        >
          <div className='relative mr-3'>
            <div className='w-8 h-8 flex items-center justify-center rounded-full bg-cyan-700 p-1'>
              <Heart className='w-5 h-5'></Heart>
            </div>
            <div className='flex justify-center items-center absolute w-5 h-5 top-0 -right-2 bg-cyan-300 rounded-full font-bold'>
              <span className='text-cyan-900'>{wishlist.length}</span>
            </div>
          </div>
          <span>Wishlist</span>
        </button>
        <button
          type='button'
          className='flex items-center ml-4 mr-4 bg-cyan-800 rounded-3xl py-1 pl-1 pr-3'
        >
          <div className='relative mr-3'>
            <div className='w-8 h-8 flex items-center justify-center rounded-full bg-cyan-700 p-1'>
              <ShoppingCart className='w-5 h-5'></ShoppingCart>
            </div>
            <div className='flex justify-center items-center absolute w-5 h-5 top-0 -right-2 bg-cyan-300 rounded-full font-bold'>
              <span className='text-cyan-900'>{cart.length}</span>
            </div>
          </div>
          <span>Shopping Cart</span>
        </button>
      </div>
    </header>
  );
}
