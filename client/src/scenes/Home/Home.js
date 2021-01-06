import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUsers } from '../../store/users';

export default function Home() {
    const dispatch = useDispatch();

    const [loaded, setLoad] = useState(false);
    const { currentUserId } = useSelector(({ users }) => users);
    const users = useSelector(({ users }) => Object.values(users));

    useEffect(() => setLoad(dispatch(getUsers())), [dispatch]);

    if (!loaded) return null;

    return (
        <>
            {users.map(
                (user) =>
                    user.id !== currentUserId && (
                        <div key={`user-${user.id}`}>
                            <NavLink to={`/profile/${user.id}`}>
                                {`${user.first} ${user.last}`}
                            </NavLink>
                        </div>
                    )
            )}
        </>
    );
}
