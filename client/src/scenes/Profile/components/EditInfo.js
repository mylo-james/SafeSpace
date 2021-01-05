import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../../../global/components/Forms/Form';
import Input from '../../../global/components/Forms/Input';
import { editUser } from '../../../store/users';

import EditButton from './EditButton';

function EditInfo({ name, info }) {
    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);

    const toggleEdit = () => {
        edit ? setEdit(false) : setEdit(true);
    };

    const handleSubmit = async (state) => {
        await dispatch(editUser(state));
        setEdit(false);
    };

    return (
        <>
            <EditButton edit={edit} name={name} toggleEdit={toggleEdit} />
            {edit ? (
                <Form id={`${name}EditForm`} onSubmit={handleSubmit}>
                    <Input name={name} initValue={info} />
                </Form>
            ) : (
                <div>{info}</div>
            )}
        </>
    );
}

export default EditInfo;
