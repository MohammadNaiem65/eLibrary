import Loader from '../../shared/Loader';
import Error from '../../shared/Error';
import BookCard from '../../shared/BookCard';
import { Link } from 'react-router-dom';

export default function BooksSection({ tag, queryResult }) {
    const { data: books, isLoading, isSuccess, isError, error } = queryResult;

    let content;

    // ? Decide what to render
    if (isLoading) {
        content = <Loader />;
    } else if (!isLoading && isError) {
        content = <Error className='w-fit mx-auto' error={error.message} />;
    } else if (!isLoading && isSuccess) {
        content = (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8'>
                {books
                    ?.filter((book) => book?.tags?.includes(tag))
                    ?.slice(0, 4)
                    ?.map((book, index) => (
                        <BookCard key={index} book={book} />
                    ))}
            </div>
        );
    }

    return (
        <section className='my-24 px-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center mb-8'>
                    <h2 className='text-3xl font-bold capitalize'>{tag}:</h2>
                    <Link
                        to={`/books?category=${tag}`}
                        className='text-gray-600 hover:text-gray-900'
                    >
                        See all
                    </Link>
                </div>

                {content}
            </div>
        </section>
    );
}
