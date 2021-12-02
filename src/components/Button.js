import styled from 'styled-components';

export const Button = ({ label, onClick }) => {
    return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

const StyledButton = styled.button`
    height: 32px;
    padding: 4px 8px;
    background-color: #155d84;
    color: white;
    border: 1px solid #155d84;
    outline: none;
    font-size: 20px;

    :hover {
        background-color: #026fa1;
        border: 1px solid #026fa1;
        cursor: pointer;
    }

    :active {
        background-color: #026fa1;
    }
`;
