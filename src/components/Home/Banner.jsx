import Navbar from '../../shared/Navbar';
import { SearchBar } from './SearchBar';

export default function Banner() {
    return (
        <div className='h-screen w-full relative'>
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
                <Navbar />

                {/* Hero Section */}
                <div className='mt-10 py-20 text-center'>
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
                        <SearchBar />
                    </div>
                </div>
            </div>
        </div>
    );
}
