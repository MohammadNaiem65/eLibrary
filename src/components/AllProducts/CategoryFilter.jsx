import { useDraggableScroll } from '../../hooks/useDraggableScroll';
import CategoryButton from './CategoryButton';

const categories = [
    'self help',
    'best seller',
    'kid',
    'health',
    'diet',
    'business',
    'tech',
    'game',
    'mystery',
    'crime',
    'adventure',
    'history',
    'thriller',
    'job',
    'ai',
    'code',
    'coloring',
    'fitness',
    'sci fi',
];

export default function CategoryFilter({
    selectedCategory,
    setSelectCategory,
}) {
    const { containerRef, handlers, isDragging } = useDraggableScroll();

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
                    {categories.map((category) => (
                        <CategoryButton
                            key={category}
                            category={category}
                            isSelected={selectedCategory === category}
                            onClick={() => setSelectCategory(category)}
                        />
                    ))}
                </div>
            </div>
            <div className='absolute right-0 top-0 h-full w-24 pointer-events-none bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent' />
        </div>
    );
}
