import { useEffect, useState } from 'react';
import UserContext from './Context';

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState('');

    // useEffect(() => {
    //     setUser('jim');
    // }, []);

    const value = {
        user,
        setUser,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}
