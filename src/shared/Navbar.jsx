import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import AuthContext from '../contexts/AuthContext';

const navItems = ['home', 'books', 'cart', 'login'];

export default function Navbar() {
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

    return (
        <nav className='w-full px-8 py-4 flex items-center justify-between z-[100] backdrop-blur-sm fixed bg-gradient-to-r from-purple-900/70 to-blue-900/70'>
            <Link to='/' className='flex items-center gap-2'>
                <BookOpen className='h-8 w-8 text-white' />
                <span className='text-2xl font-bold text-white'>BookVerse</span>
            </Link>

            <div className='flex items-center gap-x-8'>
                <SearchBar className='w-96' />

                {navItems.map((item, index) =>
                    item === 'logout' ? (
                        <button
                            key={index}
                            onClick={handleLogout}
                            className='capitalize text-white/90 hover:text-white transition-colors duration-200 text-nowrap'
                        >
                            {item}
                        </button>
                    ) : (
                        <Link
                            key={index}
                            to={item}
                            className='capitalize text-white/90 hover:text-white transition-colors duration-200 text-nowrap'
                        >
                            {item}
                        </Link>
                    )
                )}
            </div>
        </nav>
    );
}
