import styled from 'styled-components';
import { NavLink } from './NavLink';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledLinks>
                <NavLink to="/" title="Home" />
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

const StyledGithbLink = styled.div`
    position: absolute;
    right: 32px;
    top: 4px;
`;

const StyledGithubIcon = styled.img`
    height: 40px;
`;
