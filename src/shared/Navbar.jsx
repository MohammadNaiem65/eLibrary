import { BookOpen } from 'lucide-react';
import { Navigation } from '../components/Home/Navigation';

export default function Navbar() {
    return (
        <div className='w-full px-8 py-6 flex items-center justify-between z-[100] backdrop-blur-sm'>
            <div className='flex items-center gap-2'>
                <BookOpen className='h-8 w-8 text-white' />
                <span className='text-2xl font-bold text-white'>BookVerse</span>
            </div>

            <Navigation />
        </div>
    );
}
