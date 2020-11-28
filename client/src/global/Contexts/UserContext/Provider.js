import { useEffect, useState } from 'react';
import UserContext from './Context';

export default function UserContextProvider({ children, setLoad }) {
    const [user, setUser] = useState('');

    useEffect(() => {
        (async () => {
            const oldFetch = window.fetch;
            const response = await oldFetch('/api/csrf/restore', {
                method: 'GET',
                credentials: 'include',
            });
            if (response.ok) {
                const { csrf_token, user } = await response.json();

                window.fetch = (resource, init = {}) => {
                    init.headers = {
                        ...init.headers,
                        'X-CSRFToken': csrf_token,
                    };
                    if (!init.headers['Content-Type']) {
                        init.headers['Content-Type'] = 'application/json';
                    }

                    return oldFetch(resource, init);
                };
                if (user) {
                    console.log(user);
                    setUser(user);
                }
                setLoad(true);
            }
        })();
    }, [setLoad]);

    const value = {
        user,
        setUser,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}
