import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../../../global/components/Forms/Form';
import Input from '../../../global/components/Forms/Input';

function Login() {
    return (
        <>
            <Form submitButton={true}>
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
                
            </Form>
            <NavLink to="/welcome/signup">Signup</NavLink>
        </>
    );
}

export default Login;
