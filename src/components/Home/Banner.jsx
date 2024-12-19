import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Banner() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    return (
        <section className='h-screen w-full relative'>
            {/* Background Image */}
            <div
                className='absolute inset-0 bg-cover bg-center z-0'
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
                }}
            >
                <div className='absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90' />
            </div>

            {/* Content */}
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* <Navbar /> */}

                {/* Hero Section */}
                <div className='py-52 text-center'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
                        Discover Your Next
                        <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>
                            Great Read
                        </span>
                    </h1>
                    <p className='text-lg text-white/80 mb-8 max-w-2xl mx-auto'>
                        Explore thousands of books from contemporary bestsellers
                        to timeless classics, all at your fingertips.
                    </p>
                    <div className='flex justify-center'>
                        <div className='relative max-w-md w-full'>
                            <input
                                type='text'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={(e) =>
                                    e.key === 'Enter' &&
                                    navigate(`/books?query=${query}`)
                                }
                                placeholder='Search for books...'
                                className={`w-full px-4 py-3 pl-10 bg-white/10 backdrop-blur-md rounded-lg 
                   border border-white/20 text-white placeholder-white/70
                   focus:outline-none focus:ring-2 focus:ring-white/30 `}
                            />
                            <Search className='absolute left-3 top-[.9rem] h-5 w-5 text-white/70' />
                        </div>

                        <Link
                            to='/books'
                            className='bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-3 rounded-lg font-semibold ml-4'
                        >
                            All Books
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
