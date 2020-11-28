import { useState } from 'react';
import FeedContext from './Context';

export default function FeedContextProvider({ children }) {
    const [feed, setFeed] = useState([]);

    const value = {
        feed,
        setFeed,
    };

    return (
        <FeedContext.Provider value={value}>{children}</FeedContext.Provider>
    );
}
