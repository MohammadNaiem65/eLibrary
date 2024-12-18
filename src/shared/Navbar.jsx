import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';

const navItems = ['home', 'books', 'cart', 'login'];

export default function Navbar() {
    return (
        <nav className='w-full px-8 py-4 flex items-center justify-between z-[100] backdrop-blur-sm fixed bg-gradient-to-r from-purple-900/70 to-blue-900/70'>
            <Link to='/' className='flex items-center gap-2'>
                <BookOpen className='h-8 w-8 text-white' />
                <span className='text-2xl font-bold text-white'>BookVerse</span>
            </Link>

            <div className='flex items-center gap-x-8'>
                <SearchBar className='w-96' />

                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item}
                        className='capitalize text-white/90 hover:text-white transition-colors duration-200 text-nowrap'
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
