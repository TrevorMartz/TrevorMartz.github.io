import styled from 'styled-components';

export const Input = ({ onChange, placeholder, label, value }) => {
    return (
        <StyledInputWrapper>
            {label}
            <StyledInput onChange={onChange} placeholder={placeholder} value={value}></StyledInput>
        </StyledInputWrapper>
    );
};

const StyledInputWrapper = styled.div``;

const StyledInput = styled.input`
    height: 32px;
`;
