import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Form from '../../../global/components/Forms/Form';
import Input from '../../../global/components/Forms/Input';
import { login } from '../../../store/session';

const LoginDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const formStyle = {
    backgroundColor: 'rgba(0,0,0,.7)',
    height: '30vw',
    width: '50vw',
    padding: '30px',
    borderRadius: '20px',
};

function Login() {
    const dispatch = useDispatch();

    const demoInfo = {
        email: 'DemoUser@user.com',
        password: 'Test@1234',
    };

    return (
        <LoginDiv>
            <Form
                style={formStyle}
                onSubmit={(state) => dispatch(login(state))}
            >
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
                <button type='submit'>Submit</button>
                <button type='button' onClick={() => dispatch(login(demoInfo))}>
                    Demo
                </button>
            </Form>
        </LoginDiv>
    );
}

export default Login;
