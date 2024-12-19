import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import BookCard from '../../shared/BookCard';

export default function BooksGrid() {
    const [searchParams] = useSearchParams();
    const axiosSecure = useAxiosSecure();

    const category = searchParams.get('category');
    const query = searchParams.get('query');

    const { data: books } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await axiosSecure.get('/books');
            return res.data;
        },
    });

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {books
                ?.filter((book) =>
                    query === null
                        ? true
                        : book?.title?.toLowerCase()?.includes(query?.toLowerCase())
                )
                ?.filter((book) =>
                    category === 'all' || !category
                        ? true
                        : book?.tags?.includes(category)
                )
                ?.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
        </div>
    );
}
