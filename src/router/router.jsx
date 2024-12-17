import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const Home = lazy(() => import('../pages/Home'));
const AllProducts = lazy(() => import('../pages/AllProducts'));
const Cart = lazy(() => import('../pages/Cart'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

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
                path: '/home',
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
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    },
]);

export default router;
