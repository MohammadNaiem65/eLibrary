export default function BookCard({ product }) {
    return (
        <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105'>
            <div className='aspect-square overflow-hidden'>
                <img
                    src={product.image}
                    alt={product.title}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='p-4'>
                <h3 className='font-semibold text-lg mb-2'>{product.title}</h3>
                <p className='text-gray-600 text-sm mb-3 line-clamp-2'>
                    {product.description}
                </p>
                <div className='flex items-center justify-between'>
                    <span className='text-blue-600 font-bold'>
                        ${product.price.toFixed(2)}
                    </span>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
