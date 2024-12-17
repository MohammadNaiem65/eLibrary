import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './shared/Loader';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

function App() {
    return (
        <>
            <Navbar />

            <main className='min-h-screen font-host bg-[rgba(253,253,246,1)]'>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            
            <Footer />
        </>
    );
}

export default App;
