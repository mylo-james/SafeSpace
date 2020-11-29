import { useContext } from 'react';
import styled from 'styled-components';
import Form from '../../../global/components/Forms/Form';
import Input from '../../../global/components/Forms/Input';
import UserContext from '../../../global/Contexts/UserContext/Context';

const SignupDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 80px);
    padding-top: 100px;
`;
const formStyle = {
    backgroundColor: 'rgba(0,0,0,.7)',
    height: '50vw',
    width: '50vw',
    padding: '30px',
    borderRadius: '20px',
    color: 'white',
};

function Signup() {
    const { setUser } = useContext(UserContext);
    const handleSubmit = async (state) => {
        const res = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify(state),
        });
        const user = await res.json();
        setUser(user);
    };
    return (
        <SignupDiv>
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
                <Input
                    required
                    label='Confirm Password'
                    type='password'
                    name='confirm'
                    placeholder='Confirm Password'
                />
            </Form>
        </SignupDiv>
    );
}

export default Signup;
