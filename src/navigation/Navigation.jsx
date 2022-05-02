import styled from 'styled-components';
import { NavLink } from './NavLink';

export const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledLinks>
                <NavLink to="/" title="Home" />
                <NavLink to="/pokequiz" title="Poke Quiz" />
                <NavLink to="/poketypequiz" title="Poke Type Quiz" />
                <NavLink to="/names" title="Name reader" />
            </StyledLinks>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.div`
    background-color: ${({ theme }) => theme.colors.neutral300};
    padding: 8px 32px 8px;
    height: 30px;
`;

const StyledLinks = styled.div`
    max-width: ${({ theme }) => theme.breakpoints.maxWidth};
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 30px;
`;
