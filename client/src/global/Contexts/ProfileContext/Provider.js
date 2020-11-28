import { useState } from 'react';
import ProfileContext from './Context';

export default function ProfileContextProvider({ children }) {
    const [profile, setProfile] = useState('');

    const value = {
        profile,
        setProfile,
    };

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
}
