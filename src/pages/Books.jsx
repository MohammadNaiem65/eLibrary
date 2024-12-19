import CategoryFilter from '../components/Books/CategoryFilter';
import BooksGrid from '../components/Books/BooksGrid';

export default function Books() {
    return (
        <main className='min-h-screen bg-gray-50 py-20'>
            {/* Main Content */}
            <section className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
                <CategoryFilter />

                <section className='mt-8'>
                    <BooksGrid />
                </section>
            </section>
        </main>
    );
}
