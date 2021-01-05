import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileContext from '../../global/Contexts/ProfileContext/Context';
import ProfileInfo from './components/ProfileInfo';

function UserProfile() {
    const userId = Number.parseInt(useParams().userId);
    const user = useSelector(({ users }) => users.byId[userId]);

    const { first, last, email, survey } = user;

    return (
        <>
            <h1>{`${first} ${last}`}</h1>
            <h2>{email}</h2>
            <ProfileInfo name='bio' label='About Me' />
            <ProfileInfo name='location' label='Location' />
            <ProfileInfo name='job' label='Occupation' />
            <ProfileInfo name='smoke' label='How often do you smoke?' />
            <ProfileInfo name='drink' label='How often do you drink?' />
            <ProfileInfo name='clean' label='How often do you clean?' />
            <ProfileInfo name='social' label='How often do you have company?' />
            <ProfileInfo name='salary' label='Monthly Salary' />
        </>
    );
}

export default UserProfile;
