import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from '../../store/users';
import ProfileInfo from './components/ProfileInfo';

function UserProfile() {
    const dispatch = useDispatch();
    const userId = Number.parseInt(useParams().userId);

    const user = useSelector(({ users }) => users.byId[userId]);

    useEffect(() => {
        if (!user) {
            dispatch(getUser(userId));
        }
    }, [dispatch, userId, user]);

    if (!user) return null;

    const { first, last, email } = user;

    return (
        <>
            <h1>{`${first} ${last}`}</h1>
            <h2>{email}</h2>
            {user.survey ? (
                <>
                    <ProfileInfo name='bio' label='About Me' />
                    <ProfileInfo name='location' label='Location' />
                    <ProfileInfo name='job' label='Occupation' />
                    <ProfileInfo name='smoke' label='How often do you smoke?' />
                    <ProfileInfo name='drink' label='How often do you drink?' />
                    <ProfileInfo name='clean' label='How often do you clean?' />
                    <ProfileInfo
                        name='social'
                        label='How often do you have company?'
                    />
                    <ProfileInfo name='salary' label='Monthly Salary' />
                </>
            ) : (
                <p>This person is still setting up their profile!</p>
            )}
        </>
    );
}

export default UserProfile;
