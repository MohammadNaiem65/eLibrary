import { useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [authData, setAuthData] = useState(null);

    return (
        <AuthContext.Provider value={{ authData, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
