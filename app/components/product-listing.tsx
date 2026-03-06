const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 39.99,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 49.99,
  },
];

export default function ProductListing() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8'>
      {products.map((product) => (
        <div key={product.id} className='bg-gray-800 p-4 rounded-lg'>
          <h3 className='text-lg font-bold'>{product.name}</h3>
          <p className='text-cyan-400'>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
