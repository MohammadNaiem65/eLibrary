import BookCard from './BookCard';

export default function ProductGrid({ products }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {products.map((product) => (
                <BookCard key={product.id} product={product} />
            ))}
        </div>
    );
}