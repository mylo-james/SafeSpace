import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../../../global/components/Forms/Form';
import Input from '../../../global/components/Forms/Input';
import { editUser } from '../../../store/session';

function EditInfo({ name, info }) {
    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);

    const toggleEdit = () => {
        edit ? setEdit(false) : setEdit(true);
    };

    const handleSubmit = (state) => {
        dispatch(editUser(state));
        setEdit(false);
    };

    return (
        <>
            {edit ? (
                <div>
                    <Form
                        submitButton={true}
                        style={{ width: '200px' }}
                        onSubmit={handleSubmit}
                    >
                        <Input name={name} initValue={info} />
                    </Form>
                </div>
            ) : (
                <div>
                    <div>{info}</div>
                    <button onClick={toggleEdit}>Edit</button>
                </div>
            )}
        </>
    );
}

export default EditInfo;
