import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileContext from '../../../global/Contexts/ProfileContext/Context';
import UserContext from '../../../global/Contexts/UserContext/Context';
import parseInfo from '../../../global/utils/parseInfo';
import EditInfo from './EditInfo';

function ProfileInfo({ label, name }) {
    const { userId } = useParams();
    const { profile } = useContext(ProfileContext);
    const info = profile[name];
    const { user } = useContext(UserContext);
    const [state, setState] = useState(info);
    const self = Number.parseInt(userId) === user.id;

    useEffect(() => {
        parseInfo(name, info, setState);
    }, [name, info]);

    return (
        <>
            <div>
                {label}
                {!self ? (
                    <div>{state}</div>
                ) : (
                    <EditInfo name={name} state={state}/>
                )}
            </div>
        </>
    );
}

export default ProfileInfo;
