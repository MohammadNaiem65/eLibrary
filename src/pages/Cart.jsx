import { useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import CartContext from '../contexts/CartContext';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);

    const updateQuantity = (id, newQuantity) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const subtotal = cart.reduce(
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
                        {cart.length === 0 ? (
                            <div className='text-center py-12 bg-white rounded-lg'>
                                <p className='text-gray-500 text-lg'>
                                    Your cart is empty
                                </p>
                            </div>
                        ) : (
                            <div className='bg-white rounded-lg p-6 divide-y-2'>
                                {cart.map((item) => (
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
