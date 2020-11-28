import { useState, cloneElement } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export default function Form({ children, onSubmit, style = {}, submitButton }) {
    const [formFields, setFormFields] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formFields);
        } else {
            console.log(
                "Please add an onSumbit to your Form... This is your form's current state:"
            );
            console.log(formFields);
        }
    };

    return (
        <StyledForm style={style} onSubmit={handleSubmit}>
            {Array.isArray(children)
                ? children.map((child, i) =>
                      cloneElement(child, { formFields, setFormFields, key: i })
                  )
                : cloneElement(children, { formFields, setFormFields })}
            {submitButton && <button type='submit'>Submit</button>}
        </StyledForm>
    );
}
