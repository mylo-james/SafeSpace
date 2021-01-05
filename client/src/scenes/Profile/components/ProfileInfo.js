import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import parseInfo from '../../../global/utils/parseInfo';
import EditInfo from './EditInfo';

function ProfileInfo({ label, name }) {
    const userId = Number.parseInt(useParams().userId);
    const { currentUserId, byId } = useSelector(({ users }) => users);
    const info = parseInfo(name, byId[userId].survey[name]);
    const self = userId === currentUserId;

    return (
        <>
            <div>
                {label}
                {!self ? (
                    <div>{info}</div>
                ) : (
                    <EditInfo name={name} info={info} />
                )}
            </div>
        </>
    );
}

export default ProfileInfo;
