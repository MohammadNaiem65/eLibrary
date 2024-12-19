import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import AuthContext from '../contexts/AuthContext';
import CartContext from '../contexts/CartContext';

const navItems = ['home', 'books', 'cart', 'login'];

export default function Navbar() {
    const { cart } = useContext(CartContext);
    const { user, setUser } = useContext(UserContext);
    const { setAuthData } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('auth');
        setUser(null);
        setAuthData(null);
    };

    if (user?.id) {
        navItems.splice(3, 1, 'logout');
    }

    const totalQuantity = cart?.reduce(
        (total, curr) => total + curr.quantity,
        0
    );

    console.log(totalQuantity);

    return (
        <nav className='w-full px-8 py-4 flex items-center justify-between z-[100] backdrop-blur-sm fixed bg-gradient-to-r from-purple-900/70 to-blue-900/70'>
            <Link to='/' className='flex items-center gap-2'>
                <BookOpen className='h-8 w-8 text-white' />
                <span className='text-2xl font-bold text-white'>BookVerse</span>
            </Link>

            <div className='flex items-center gap-x-8'>
                <SearchBar className='w-96' />

                <Link
                    to='/'
                    className='capitalize text-white/90 hover:text-white transition-colors duration-200 text-nowrap'
                >
                    Home
                </Link>

                <Link
                    to='/books'
                    className='capitalize text-white/90 hover:text-white transition-colors duration-200 text-nowrap'
                >
                    Books
                </Link>

                <div className='relative'>
                    <Link
                        to='/cart'
                        className='capitalize text-white/90 hover:text-white transition-colors duration-200 text-nowrap'
                    >
                        Cart
                    </Link>
                    {totalQuantity ? (
                        <span className='absolute -top-[0.4rem] -right-[0.4rem] inline-flex items-center text-xs font-medium text-white ring-1 ring-inset ring-blue-700/10'>
                            {totalQuantity}
                        </span>
                    ) : null}
                </div>

                {user?.id ? (
                    <button
                        onClick={handleLogout}
                        className='capitalize text-white/90 hover:text-white transition-colors duration-200 text-nowrap'
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <Link
                            to='/login'
                            className='capitalize text-white/90 hover:text-white transition-colors duration-200 text-nowrap'
                        >
                            Login
                        </Link>
                        <Link
                            to='/register'
                            className='capitalize text-white/90 hover:text-white transition-colors duration-200 text-nowrap'
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
