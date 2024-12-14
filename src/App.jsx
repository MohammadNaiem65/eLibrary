import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './shared/Loader';

function App() {
    return (
        <main className='min-h-screen font-host bg-[rgba(253,253,246,1)]'>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </main>
    );
}

export default App;
