import { useContext } from 'react';
import styled from 'styled-components';
import Form from '../../../global/components/Forms/Form';
import Input from '../../../global/components/Forms/Input';
import UserContext from '../../../global/Contexts/UserContext/Context';

const LoginDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 80px);
    padding-top: 100px;
`;

const formStyle = {
    backgroundColor: 'rgba(0,0,0,.7)',
    height: '30vw',
    width: '50vw',
    padding: '30px',
    borderRadius: '20px',
    color: 'white',
};

function Login() {
    const { setUser } = useContext(UserContext);

    const handleSubmit = async (state) => {
        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(state),
        });
        const user = await res.json();
        setUser(user);
    };

    const demoInfo = {
        email: 'DemoUser@user.com',
        password: 'Test@1234',
    };

    return (
        <LoginDiv>
            <Form style={formStyle} submitButton={true} onSubmit={handleSubmit}>
                <Input
                    required
                    label='Email'
                    name='email'
                    placeholder='Email'
                />
                <Input
                    required
                    label='Password'
                    type='password'
                    name='password'
                    placeholder='Password'
                />
                <button type='button' onClick={() => handleSubmit(demoInfo)}>
                    Demo
                </button>
            </Form>
        </LoginDiv>
    );
}

export default Login;
