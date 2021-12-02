import styled from 'styled-components';

export const Input = ({ onChange, type, placeholder, label, value }) => {
    return (
        <StyledInputWrapper>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput onChange={onChange} type={type} placeholder={placeholder} value={value}></StyledInput>
        </StyledInputWrapper>
    );
};

const StyledInputWrapper = styled.div``;

const StyledLabel = styled.label`
    margin-right: 4px;
`;

const StyledInput = styled.input`
    outline: none;
    height: 32px;
    border: 1px solid #000000;

    :focus {
        border: 1px solid #026fa1;
    }
`;
