import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../../../global/components/Forms/Form';
import Input from '../../../global/components/Forms/Input';

function Signup() {
    return (
        <>
            <Form submitButton={true}>
                <Input required label="Name" name="name" placeholder="Name" />
                <Input
                    required
                    label="Email"
                    name="email"
                    placeholder="Email"
                />
                <Input
                    required
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <Input
                    required
                    label="Confirm Password"
                    type="password"
                    name="confirm"
                    placeholder="Confirm Password"
                />
            </Form>
            <NavLink to="/welcome/login">Login</NavLink>
        </>
    );
}

export default Signup;
