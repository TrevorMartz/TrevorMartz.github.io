import styled from 'styled-components';
import { NavLink } from './NavLink';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledLinks>
                <NavLink to="/" title="Home" />
                <NavLink to="/components" title="Components" />
                <NavLink to="/pokequiz" title="Poke Quiz" />
                <NavLink to="/poketypequiz" title="Poke Type Quiz" />
                <NavLink to="/names" title="Name reader" />
                <StyledGithbLink>
                    <a href="https://github.com/TrevorMartz/TrevorMartz.github.io" target="_blank">
                        <StyledGithubIcon src="/github.ico" />
                    </a>
                </StyledGithbLink>
            </StyledLinks>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.div`
    background-color: ${({ theme }) => theme.colors.neutral100};
    padding: 8px 32px 32px;
    height: 30px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.neutral300};
`;

const StyledLinks = styled.div`
    max-width: ${({ theme }) => theme.breakpoints.maxWidth};
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 40px;
`;

const StyledGithbLink = styled.div`
    position: absolute;
    right: 32px;
    top: 4px;
`;

const StyledGithubIcon = styled.img`
    height: 55px;
`;
