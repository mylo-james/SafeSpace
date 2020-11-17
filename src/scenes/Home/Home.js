import { useContext } from 'react';
import UserContext from '../../global/contexts/UserContext/Context';
export default function Home(props) {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            <h1>{user}</h1>
        </>
    );
}
