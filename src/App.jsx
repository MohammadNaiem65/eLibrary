import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './shared/Sidebar';
import Loader from './shared/Loader';

function App() {
    return (
        <main
            className='font-host flex items-start justify-between'
            style={{
                background:
                    'linear-gradient(90deg, rgba(241,238,227,1) 0%, rgba(241,238,227,1) 18%, rgba(253,253,246,1) 18%, rgba(253,253,246,1) 100%)',
            }}
        >
            <Sidebar />

            <main className='w-[82%] min-h-screen ml-auto pl-5'>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </main>
    );
}

export default App;
