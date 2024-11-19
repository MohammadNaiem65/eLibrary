import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const Home = lazy(() => import('../pages/Home'));
const AllProducts = lazy(() => import('../pages/AllProducts'));
const Cart = lazy(() => import('../pages/Cart'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/all-products',
                element: <AllProducts />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ],
    },
]);

export default router;
