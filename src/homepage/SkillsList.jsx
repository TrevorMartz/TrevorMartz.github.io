import styled from 'styled-components';
import { H1, H5, PrimaryText, SecondaryText } from '../components';
import { SkillsListItem } from './SkillsListItem';

const mapSkills = (skill) => {
    return <SkillsListItem>{skill}</SkillsListItem>;
};

export const SkillsList = ({ title, skills }) => {
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
    max-width: 400px;
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.colors.neutral400};
    height: 100%;
    box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.colors.shadow400};
`;

const StyledTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary200};
`;

const StyledList = styled.div`
    margin: 16px auto 0;
    max-width: fit-content;
`;
