import { useContext, useState } from 'react';
import Form from '../../../global/components/Forms/Form';
import Input from '../../../global/components/Forms/Input';
import ProfileContext from '../../../global/Contexts/ProfileContext/Context';
import EditButton from './EditButton';

function EditInfo({ name, state }) {
    const { profile, setProfile } = useContext(ProfileContext);
    const info = profile[name];
    const [edit, setEdit] = useState(false);
 

    const toggleEdit = () => {
        edit ? setEdit(false) : setEdit(true);
    };

    const handleSubmit = async (state) => {
        const res = await fetch(`/api/surveys/${profile.user.id}`, {
            method: 'POST',
            body: JSON.stringify(state),
        });
        const survey = await res.json();
        setProfile(survey);
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
                <div>{state}</div>
            )}
        </>
    );
}

export default EditInfo;
