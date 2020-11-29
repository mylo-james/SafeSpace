import { useContext } from 'react';
import UserContext from '../../../global/Contexts/UserContext/Context';
import Bio from './Bio';
import Clean from './Clean';
import Drink from './Drink';
import Job from './Job';
import Location from './Location';
import Salary from './Salary';
import Smoke from './Smoke';
import Social from './Social';


function SelfProfile() {
    const {
        user: { survey },
    } = useContext(UserContext);

    if (!survey) return <p>needs survey</p>;

    const { bio, location, job, salary, clean, smoke, drink, social } = survey;

    return (
        <>
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

export default SelfProfile;
