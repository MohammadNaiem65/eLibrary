import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = ['home', 'best sellers', 'all products', 'cart', 'login'];

export default function Navbar() {
    return (
        <nav className='w-full px-8 py-6 flex items-center justify-between z-[100] bg-slate-700/30 backdrop-blur-sm fixed'>
            <div className='flex items-center gap-2'>
                <BookOpen className='h-8 w-8 text-white' />
                <span className='text-2xl font-bold text-white'>BookVerse</span>
            </div>

            <div className='flex gap-x-8'>
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        to={
                            index === 1
                                ? `/all-products?category=${item.replace(
                                      ' ',
                                      '-'
                                  )}`
                                : item.replace(' ', '-')
                        }
                        className='capitalize text-white/90 hover:text-white transition-colors duration-200'
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
