import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { BookOpen } from 'lucide-react';

export default function Footer() {
    return (
        <footer className='footer bg-gradient-to-r from-purple-900/90 to-blue-900/90 text-neutral-content p-10'>
            <aside>
                <div className='flex items-center gap-2'>
                    <BookOpen className='h-8 w-8 text-white' />
                    <span className='text-2xl font-bold text-white'>
                        BookVerse
                    </span>
                </div>
                <p>
                    BookVerse Libraries.
                    <br />
                    Providing original books since 1992
                </p>
            </aside>
            <nav>
                <h6 className='footer-title'>Social</h6>
                <div className='grid grid-flow-col gap-4'>
                    <a>
                        <Twitter className='cursor-pointer fill-white stroke-white' />
                    </a>
                    <a>
                        <Facebook className='cursor-pointer fill-white stroke-white' />
                    </a>
                    <a>
                        <Instagram className='cursor-pointer stroke-white' />
                    </a>
                </div>
            </nav>
        </footer>
    );
}
