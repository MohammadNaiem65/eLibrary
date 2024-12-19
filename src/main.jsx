import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserContextProvider } from './contexts/UserContext.jsx';
import router from './router/router.jsx';
import './index.css';
import { AuthContextProvider } from './contexts/AuthContext.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthContextProvider>
            <UserContextProvider>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </UserContextProvider>
        </AuthContextProvider>
    </StrictMode>
);
