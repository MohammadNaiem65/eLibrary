import { useContext } from 'react';
import { useState, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import AuthContext from '../contexts/AuthContext';

export default function useAuthCheck() {
    const [authChecked, setAuthChecked] = useState(false);
    const { setUser } = useContext(UserContext);
    const { setAuthData } = useContext(AuthContext);

    useEffect(() => {
        const { accessToken, user } =
            JSON.parse(localStorage.getItem('auth')) || {};

        if (user && accessToken) {
            setUser(user);
            setAuthData({ accessToken });
        }

        setAuthChecked(true);
    }, [setUser, setAuthData]);

    return authChecked;
}
