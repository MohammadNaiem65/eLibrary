import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Banner from '../components/Home/Banner';
import BooksSection from '../components/Home/BooksSection';

export default function Home() {
    const axiosSecure = useAxiosSecure();

    const queryResult = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await axiosSecure.get('/books');
            return res.data.sort((a, b) => b.rating - a.rating);
        },
    });

    return (
        <section className=' mb-5'>
            <Banner />

            <BooksSection key={0} tag='best seller' queryResult={queryResult} />

            <BooksSection key={1} tag='kid' queryResult={queryResult} />

            <BooksSection key={2} tag='self help' queryResult={queryResult} />
        </section>
    );
}
