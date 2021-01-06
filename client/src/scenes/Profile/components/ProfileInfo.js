import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import parseInfo from '../../../global/utils/parseInfo';
import EditInfo from './EditInfo';

function ProfileInfo({ label, name }) {
    const userId = Number.parseInt(useParams().userId);
    const { id, survey } = useSelector(({ session }) => session);
    const info = parseInfo(name, survey[name]);
    const self = userId === id;

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
