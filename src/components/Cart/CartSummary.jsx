export default function CartSummary({ subtotal, shipping, tax }) {
    const total = subtotal + shipping + tax;

    return (
        <div className='bg-gray-50 p-6 rounded-lg'>
            <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
            <div className='space-y-3'>
                <div className='flex justify-between'>
                    <span className='text-gray-600'>Subtotal</span>
                    <span className='font-medium'>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-gray-600'>Shipping</span>
                    <span className='font-medium'>${shipping.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-gray-600'>Tax</span>
                    <span className='font-medium'>${tax.toFixed(2)}</span>
                </div>
                <div className='border-t border-gray-200 pt-3'>
                    <div className='flex justify-between'>
                        <span className='font-semibold'>Total</span>
                        <span className='font-semibold'>
                            ${total.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
            <button className='w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-colors'>
                Proceed to Checkout
            </button>
        </div>
    );
}
