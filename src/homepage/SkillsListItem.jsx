import styled, { useTheme } from 'styled-components';
import { SecondaryText } from '../components';
import { useSpring, animated } from 'react-spring';
import { useCallback, useState } from 'react';

export const SkillsListItem = ({ children }) => {
    const { colors } = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const hoverStyle = useSpring({
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        'border-bottom': `1px solid ${isHovered ? colors.complementary800 : colors.complementary400}`,
        config: {
            tension: 300,
            friction: 15,
        },
    });
    const trigger = useCallback(() => {
        setIsHovered(true);
    }, []);
    const end = useCallback(() => {
        setIsHovered(false);
    }, []);

    return (
        <StyledListItem style={hoverStyle} onMouseEnter={trigger} onMouseLeave={end}>
            <SecondaryText>{children}</SecondaryText>
        </StyledListItem>
    );
};

const StyledListItem = styled(animated.div)`
    text-align: center;
    cursor: pointer;
    padding: 0 4px 4px 4px;
    margin: 0 32px 12px;
`;
