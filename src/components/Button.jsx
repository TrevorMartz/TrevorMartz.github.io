import styled from 'styled-components';
import { ButtonText } from './Text';

export const Button = ({ label, onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            <ButtonText lightest>{label}</ButtonText>
        </StyledButton>
    );
};

const StyledButton = styled.button`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    background-color: ${({ theme }) => theme.colors.primary800};
    border: transparent;
    border-radius: 4px;
    outline: none;
    box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.shadow700};
    transition: 0.5s 0s ease;

    :hover,
    :active {
        background-color: ${({ theme }) => theme.colors.primary700};
        box-shadow: 0px 0px 5px 3px ${({ theme }) => theme.colors.shadow700};
        cursor: pointer;
    }
`;
