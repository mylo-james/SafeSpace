import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileContext from '../../../global/Contexts/ProfileContext/Context';
import Bio from './Bio';
import Clean from './Clean';
import Drink from './Drink';
import Job from './Job';
import Location from './Location';
import Salary from './Salary';
import Smoke from './Smoke';
import Social from './Social';

function UserProfile() {
    const { id } = useParams();
    const { profile, setProfile } = useContext(ProfileContext);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/surveys/${id}`);
            const survey = await res.json();
            setProfile(survey);
            setLoaded(true);
        })();
    }, [id, setProfile]);

    if (!loaded) return null;
    if (!profile) return <p>no info yet</p>;

    const {
        bio,
        location,
        job,
        salary,
        clean,
        smoke,
        drink,
        social,
        user,
    } = profile;

    return (
        <>
            <h1>{`${user.first} ${user.last}`}</h1>
            <h2>{user.email}</h2>
            <h3>{user.username}</h3>
            <Bio bio={bio} />
            <Location location={location} />
            <Job job={job} />
            <Salary salary={salary} />
            <Clean clean={clean} />
            <Smoke smoke={smoke} />
            <Drink drink={drink} />
            <Social social={social} />
        </>
    );
}

export default UserProfile;
