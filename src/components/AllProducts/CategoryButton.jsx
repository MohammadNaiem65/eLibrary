export default function CategoryButton({ category, isSelected, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full capitalize whitespace-nowrap transition-colors ${
                isSelected
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
            }`}
        >
            <span>{category}</span>
        </button>
    );
}
