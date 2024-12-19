import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

export default function PublicRoute({ children }) {
    const { authData } = useContext(AuthContext);

    if (authData?.accessToken) {
        return <Navigate to='/books' />;
    }
    return children;
}
