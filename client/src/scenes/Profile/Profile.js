import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../../global/Contexts/UserContext/Context';
import SelfProfile from './components/SelfProfile';
import UserProfile from './components/UserProfile';

function Profile() {
    const { user } = useContext(UserContext);
    let { id } = useParams();
    id = Number.parseInt(id);

    return <>{id === user.id ? <SelfProfile /> : <UserProfile />}</>;
}

export default Profile;
