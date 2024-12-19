import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const Home = lazy(() => import('../pages/Home'));
const Books = lazy(() => import('../pages/Books'));
const Book = lazy(() => import('../pages/Book'));
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
                path: '/books',
                element: <Books />,
            },
            {
                path: '/books/:id',
                element: <Book />,
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
