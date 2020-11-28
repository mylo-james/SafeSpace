import { useContext } from 'react';
import UserContext from '../../global/Contexts/UserContext/Context';
export default function Home(props) {
    const { user } = useContext(UserContext);
    return (
        <>
            <h1>{user.email}</h1>
        </>
    );
}
