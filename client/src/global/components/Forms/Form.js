import { useState, cloneElement } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 20vw;
`;

export default function Form({ children, onSubmit, submitButton }) {
    const [formFields, setFormFields] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formFields);
        }
        console.log(
            "Please add an onSumbit to your Form... This is your form's current state:"
        );
        console.log(formFields);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            {Array.isArray(children)
                ? children.map((child, i) =>
                      cloneElement(child, { formFields, setFormFields, key: i })
                  )
                : cloneElement(children, { formFields, setFormFields })}
            {submitButton && <button type="submit">Submit</button>}
        </StyledForm>
    );
}
