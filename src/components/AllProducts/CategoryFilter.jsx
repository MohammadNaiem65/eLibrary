import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useDraggableScroll from '../../hooks/useDraggableScroll';
import CategoryButton from './CategoryButton';

export default function CategoryFilter() {
    const { containerRef, handlers, isDragging } = useDraggableScroll();

    const axiosSecure = useAxiosSecure();

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axiosSecure.get('/tags');
            return res.data?.categories;
        },
    });

    return (
        <div className='relative w-full select-none'>
            <div
                ref={containerRef}
                className={`flex gap-4 overflow-x-scroll pb-4 scrollbar-hide cursor-grab active:cursor-grabbing ${
                    isDragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
                {...handlers}
            >
                <div className='flex gap-4 min-w-max'>
                    {categories?.map((category) => (
                        <CategoryButton key={category} category={category} />
                    ))}
                </div>
            </div>
            <div className='absolute right-0 top-0 h-full w-24 pointer-events-none bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent' />
        </div>
    );
}
