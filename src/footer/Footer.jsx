import styled from 'styled-components';
import { PrimaryText, SecondaryText } from '../components';

export const Footer = () => {
    return (
        <StyledFooter>
            <PrimaryText>This site is built using React, all by me(Trevor).</PrimaryText>
            <SecondaryText>
                I designed it too, but I'm a developer, not a designer. So I hope you don't judge me too hard on that.
            </SecondaryText>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 8px 32px;
    min-height: 64px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.neutral400};

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletWidth}) {
        padding: 8px 16px;
    }
`;
