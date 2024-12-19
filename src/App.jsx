import { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from './shared/Loader';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import useAuthCheck from './hooks/useAuthCheck';

function App() {
    const authChecked = useAuthCheck();

    if (!authChecked) {
        return;
    }

    return (
        <>
            <Navbar />

            <main className='min-h-screen font-host bg-[rgba(253,253,246,1)]'>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
            <ToastContainer />
            <ScrollRestoration />
        </>
    );
}

export default App;
