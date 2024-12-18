import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CategoryFilter from '../components/AllProducts/CategoryFilter';
import ProductGrid from '../components/AllProducts/ProductGrid';

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

const products = [
    {
        id: 1,
        title: 'Premium Leather Backpack',
        price: 89.99,
        description: 'Handcrafted leather backpack with laptop compartment',
        category: 'accessories',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 2,
        title: 'Wireless Noise-Canceling Headphones',
        price: 199.99,
        description: 'Premium audio experience with active noise cancellation',
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 3,
        title: 'Smart Fitness Watch',
        price: 149.99,
        description: 'Track your health and fitness goals in style',
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 4,
        title: 'Organic Cotton T-Shirt',
        price: 29.99,
        description: 'Sustainable and comfortable everyday wear',
        category: 'clothing',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 5,
        title: 'Minimalist Wall Clock',
        price: 39.99,
        description: 'Modern design for your home or office',
        category: 'home',
        image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 6,
        title: 'Ceramic Coffee Set',
        price: 59.99,
        description: 'Handmade ceramic coffee cups and saucer set',
        category: 'home',
        image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=800',
    },
];

function App() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [searchParams] = useSearchParams({
        category: '',
        q: '',
    });

    console.log(searchParams.get('category'));

    return (
        <main className='min-h-screen bg-gray-50 py-20'>
            {/* Main Content */}
            <section className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    setSelectCategory={setSelectedCategory}
                />

                <div className='mt-8'>
                    <ProductGrid products={products} />
                </div>
            </section>
        </main>
    );
}

export default App;
