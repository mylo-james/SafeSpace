import styled from 'styled-components';

const StyledInput = styled.input`
    margin: 5px;
`;
export default function Input({
    name,
    placeholder,
    type,
    label,
    required,
    setFormFields,
    formFields,
}) {
    const handleChange = (e) => {
        setFormFields((state) => {
            return {
                ...state,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <>
            {label && <label htmlFor={`${name}Input`}>{label}</label>}
            <StyledInput
                required={required || false}
                onChange={handleChange}
                id={`${name}Input`}
                name={name}
                value={formFields[name] || ''}
                placeholder={placeholder}
                type={type || 'text'}
            />
        </>
    );
}
