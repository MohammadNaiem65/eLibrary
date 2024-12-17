import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';

// Sample cart data
const initialItems = [
    {
        id: 1,
        name: 'Premium Wireless Headphones',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
        quantity: 1,
    },
    {
        id: 2,
        name: 'Smart Fitness Watch',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
        quantity: 1,
    },
];

export default function Cart() {
    const [items, setItems] = useState(initialItems);

    const updateQuantity = (id, newQuantity) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = 10;
    const tax = subtotal * 0.08;

    return (
        <main className='min-h-screen bg-gray-100 pt-20'>
            <div className='max-w-6xl mx-auto px-4 py-8'>
                <div className='flex items-center gap-3 mb-8'>
                    <ShoppingCart className='w-8 h-8 text-blue-600' />
                    <h1 className='text-3xl font-bold text-gray-900'>
                        Your Cart
                    </h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='lg:col-span-2'>
                        {items.length === 0 ? (
                            <div className='text-center py-12 bg-white rounded-lg'>
                                <p className='text-gray-500 text-lg'>
                                    Your cart is empty
                                </p>
                            </div>
                        ) : (
                            <div className='bg-white rounded-lg p-6 divide-y-2'>
                                {items.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        {...item}
                                        onUpdateQuantity={updateQuantity}
                                        onRemove={removeItem}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <CartSummary
                            subtotal={subtotal}
                            shipping={shipping}
                            tax={tax}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
