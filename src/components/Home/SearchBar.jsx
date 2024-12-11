import { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
    const [query, setQuery] = useState('');

    return (
        <div className='relative max-w-md w-full'>
            <input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search for books...'
                className='w-full px-4 py-2 pl-10 bg-white/10 backdrop-blur-md rounded-lg 
                   border border-white/20 text-white placeholder-white/70
                   focus:outline-none focus:ring-2 focus:ring-white/30'
            />
            <Search className='absolute left-3 top-2.5 h-5 w-5 text-white/70' />
        </div>
    );
}
