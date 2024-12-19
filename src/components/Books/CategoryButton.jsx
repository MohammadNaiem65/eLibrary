import { useSearchParams } from 'react-router-dom';

export default function CategoryButton({ category }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentCategory = searchParams.get('category');

    const handleClick = () => {
        // If the clicked category is the same as the current one, clear the category
        // Otherwise, set the new category
        if (currentCategory === category) {
            searchParams.set('category', 'all');
        } else {
            searchParams.set('category', category);
        }
        setSearchParams(searchParams);
    };

    return (
        <button
            onClick={handleClick}
            className={`min-w-20 px-4 py-2 rounded-full capitalize whitespace-nowrap transition-colors ${
                currentCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
            }`}
        >
            <span>{category}</span>
        </button>
    );
}
