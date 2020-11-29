import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import FeedContext from '../../global/Contexts/FeedContext/Context';
import UserContext from '../../global/Contexts/UserContext/Context';
export default function Home() {
    const { user: currentUser } = useContext(UserContext);
    const { feed, setFeed } = useContext(FeedContext);
    const [loaded, setLoad] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/users');
            const { users } = await res.json();
            setFeed(users);
            setLoad(true);
        })();
    }, [setFeed]);

    if (!loaded) return null;

    return (
        <>
            {feed.map(
                (user) =>
                    currentUser.id !== user.id && (
                        <div key={`${user.id}feedmap`}>
                            <NavLink to={`/profile/${user.id}`}>
                                {`${user.first} ${user.last}`}
                            </NavLink>
                        </div>
                    )
            )}
        </>
    );
}
