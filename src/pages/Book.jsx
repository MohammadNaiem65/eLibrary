import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Calendar, Tag } from 'lucide-react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import CartContext from '../contexts/CartContext';
import StarRating from '../shared/StarRating';

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default function Book() {
    const { cart, setCart } = useContext(CartContext);
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: book } = useQuery({
        queryKey: ['book', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/books/${id}`);
            return res.data;
        },
    });

    const handleAddToCart = () => {
        const existingBook = cart?.find((bk) => bk.id === id);
        let updatedCart;

        if (existingBook) {
            updatedCart = cart.map((bk) =>
                bk.id === id ? { ...bk, quantity: bk.quantity + 1 } : bk
            );
        } else {
            updatedCart = [...cart, { ...book, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        book?.id && (
            <section className='min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-4xl mt-14 mx-auto bg-white rounded-2xl shadow-xl overflow-hidden'>
                    <div className='md:flex p-8'>
                        {/* Book Image Section */}
                        <div className='md:w-1/2 flex items-start justify-start bg-gray-50'>
                            <img
                                src={book.picture}
                                alt={book.title}
                                className='w-full max-w-sm h-[32rem] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'
                            />
                        </div>

                        {/* Book Details Section */}
                        <div className='md:w-1/2 pl-3'>
                            <h1 className='mt-2 text-3xl font-bold text-gray-900 leading-tight'>
                                {book.title}
                            </h1>

                            <div className='mt-4 flex items-center'>
                                <StarRating rating={book.rating} />
                                <span className='ml-2 text-gray-600'>
                                    ({book.rating})
                                </span>
                            </div>

                            <div className='mt-4 flex items-center text-gray-600'>
                                <Calendar className='w-5 h-5 mr-2' />
                                <span>{formatDate(book.published)}</span>
                            </div>

                            <div className='mt-4'>
                                <h2 className='text-xl font-semibold text-gray-900'>
                                    Author
                                </h2>
                                <div className='mt-2 flex flex-wrap gap-2'>
                                    {book.author.map((author, index) => (
                                        <span
                                            key={index}
                                            className='inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium'
                                        >
                                            {author}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className='mt-4 text-gray-600 leading-relaxed'>
                                {book.description}
                            </p>

                            <div className='mt-4 flex flex-wrap gap-2'>
                                {book.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className='inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm capitalize'
                                    >
                                        <Tag className='w-4 h-4 mr-1' />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className='mt-8 flex items-center justify-between'>
                                <span className='text-3xl font-bold text-gray-900'>
                                    ${book.price.toFixed(2)}
                                </span>
                                <button
                                    onClick={handleAddToCart}
                                    className='px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300'
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    );
}
