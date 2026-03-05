import Image from 'next/image';
import heroImage from '@/public/images/hero.jpg';

export default function Hero() {
  return (
    <div className='relative w-full h-[50vh]'>
      <Image
        className='object-cover'
        src={heroImage}
        alt='Hero image'
        fill
      ></Image>
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className='font-bold text-9xl text-gray-300 drop-shadow-2xl'>
          Shop ’til you drop!
        </h1>
      </div>
    </div>
  );
}
