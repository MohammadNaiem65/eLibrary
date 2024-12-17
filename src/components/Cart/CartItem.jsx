import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartItem({
    id,
    name,
    price,
    image,
    quantity,
    onUpdateQuantity,
    onRemove,
}) {
    return (
        <div className='flex items-center gap-4 py-4'>
            <img
                src={image}
                alt={name}
                className='w-24 h-24 object-cover rounded-lg'
            />
            <div className='flex-1'>
                <h3 className='text-lg font-semibold text-gray-900'>{name}</h3>
                <p className='text-gray-600'>${price.toFixed(2)}</p>
                <div className='flex items-center gap-2 mt-2'>
                    <button
                        onClick={() =>
                            quantity > 1 && onUpdateQuantity(id, quantity - 1)
                        }
                        className='p-1 hover:bg-gray-100 rounded'
                    >
                        <Minus className='w-4 h-4' />
                    </button>
                    <span className='w-8 text-center'>{quantity}</span>
                    <button
                        onClick={() => onUpdateQuantity(id, quantity + 1)}
                        className='p-1 hover:bg-gray-100 rounded'
                    >
                        <Plus className='w-4 h-4' />
                    </button>
                </div>
            </div>
            <div className='text-right'>
                <p className='text-lg font-semibold'>
                    ${(price * quantity).toFixed(2)}
                </p>
                <button
                    onClick={() => onRemove(id)}
                    className='text-red-500 hover:text-red-700 flex items-center gap-1 mt-2'
                >
                    <Trash2 className='w-4 h-4' />
                    Remove
                </button>
            </div>
        </div>
    );
}
