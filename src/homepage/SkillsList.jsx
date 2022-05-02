import styled from 'styled-components';
import { H1, H5, PrimaryText, SecondaryText } from '../components';
import { useSpring, animated } from 'react-spring';
import { SkillsListItem } from './SkillsListItem';

const mapSkills = (skill) => {
    return <SkillsListItem>{skill}</SkillsListItem>;
};

export const SkillsList = ({ title, skills }) => {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

    return (
        <StyledSkillsList>
            <StyledTitle>
                <H5>{title}</H5>
            </StyledTitle>
            <StyledList>{skills?.map(mapSkills)}</StyledList>
        </StyledSkillsList>
    );
};

const StyledSkillsList = styled.div`
    border: 2px solid ${({ theme }) => theme.colors.primary700};
    height: 100%;
`;

const StyledTitle = styled.div`
    text-align: center;
    height: 64px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.complementary400};
`;

const StyledList = styled.div`
    margin-top: 8px;
`;
