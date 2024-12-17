import StarRating from './StarRating';

export default function BookCard({ book }) {
    const { title, author, price, picture, rating } = book;

    return (
        <div className='p-2 flex flex-col border border-gray-300/40'>
            <div className='relative group'>
                <img
                    src={picture}
                    alt={title}
                    className='w-full aspect-[3/4] object-cover rounded-sm transition-transform duration-300 group-hover:scale-105'
                />
                <button
                    className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-6 py-2 rounded-sm 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                >
                    Add
                </button>
            </div>

            <div className='mt-3 space-y-1'>
                <h3
                    title={title}
                    className='font-medium text-lg leading-tight line-clamp-2'
                >
                    {title}
                </h3>
                <p className='text-gray-600'>
                    by:{' '}
                    {author.reduce(
                        (string, author, index) =>
                            index > 0 ? `${string}, ${author}` : author,
                        ''
                    )}
                </p>
                <StarRating rating={rating} />
                <p className='font-medium'>${price.toFixed(2)}</p>
            </div>
        </div>
    );
}
