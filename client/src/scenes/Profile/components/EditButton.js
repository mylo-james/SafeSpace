
function EditButton({ edit, name, toggleEdit }) {
    return (
        <>
            <button
                className={!edit ? 'hidden' : 'info-button'}
                type='submit'
                form={`${name}EditForm`}
            >
                Done
            </button>

            <button
                className={edit ? 'hidden' : 'info-button'}
                onClick={(toggleEdit)}
            >
                Edit
            </button>
        </>
    );
}

export default EditButton;
