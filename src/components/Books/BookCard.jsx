export default function BookCard({ book }) {
    console.log(book);
    return (
        <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105'>
            <div className='aspect-square overflow-hidden'>
                <img
                    src={book.picture}
                    alt={book.title}
                    className='w-full aspect-[3/4] object-cover rounded-sm'
                />
            </div>
            <div className='p-4'>
                <h3 className='font-semibold text-lg mb-2'>{book.title}</h3>
                <p className='text-gray-600 text-sm mb-3 line-clamp-2'>
                    {book.description}
                </p>
                <div className='flex items-center justify-between'>
                    <span className='text-blue-600 font-bold'>
                        ${book.price.toFixed(2)}
                    </span>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
