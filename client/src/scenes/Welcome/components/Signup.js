import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Form from '../../../global/components/Forms/Form';
import Input from '../../../global/components/Forms/Input';
import { signup } from '../../../store/session';

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
};

function Signup() {
    const dispatch = useDispatch();
    const handleSubmit = async (state) => {
        dispatch(signup(state));
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
                    label='First Name'
                    name='first'
                    placeholder='First Name'
                />
                <Input
                    required
                    label='Last Name'
                    name='last'
                    placeholder='Last Name'
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
