import styled from 'styled-components';

export const Button = ({ label, onClick }) => {
    return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

const StyledButton = styled.button`
    height: 32px;
    cursor: pointer;
`;
