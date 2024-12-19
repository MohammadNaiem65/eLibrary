import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';
import CartContext from '../contexts/CartContext';
import UserContext from '../contexts/UserContext';
import StarRating from './StarRating';

export default function BookCard({ book }) {
    const { id, title, author, price, picture, rating } = book;
    const { cart, setCart } = useContext(CartContext);
    const { user } = useContext(UserContext);

    const handleAddToCart = () => {
        if (!user?.id) {
            return toast('❗ Kindly log in to add to cart', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce,
            });
        }

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
        <div className='p-2 flex flex-col border border-gray-300/40'>
            <div className='relative group'>
                <img
                    src={picture}
                    alt={title}
                    className='w-full aspect-[3/4] object-cover rounded-sm transition-transform duration-300 group-hover:scale-105'
                />
                <button
                    onClick={handleAddToCart}
                    className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-6 py-2 rounded-sm 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                >
                    Add
                </button>
            </div>

            <div className='mt-3 space-y-1'>
                <Link
                    to={`/books/${id}`}
                    title={title}
                    className='font-medium text-lg leading-tight line-clamp-2 hover:underline'
                >
                    {title}
                </Link>
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
