import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { H5 } from '../components';
import { config, useSpring, animated } from 'react-spring';
import { useCallback, useState } from 'react';

export const NavLink = ({ to, title }) => {
    const { colors } = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const hoverStyle = useSpring({
        'border-bottom': `${isHovered ? '8px solid ' + colors.neutral800 : '2px solid ' + colors.neutral400}`,
        config: config.stiff,
    });
    const trigger = useCallback(() => {
        setIsHovered(true);
    }, []);
    const end = useCallback(() => {
        setIsHovered(false);
    }, []);
    return (
        <StyledNavLink style={hoverStyle} onMouseEnter={trigger} onMouseLeave={end}>
            <StykedLink to={to}>
                <H5>{title}</H5>
            </StykedLink>
        </StyledNavLink>
    );
};

const StyledNavLink = styled(animated.div)`
    margin-right: 16px;
`;

const StykedLink = styled(Link)`
    text-decoration: none;
`;
