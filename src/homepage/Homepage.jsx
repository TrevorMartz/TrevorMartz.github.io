import styled from 'styled-components';
import TrevorFace from './TrevorFace.jpg';
import TrevorResume from './TrevorMartzResume.pdf';
import { H1, H2, H3, H4, H5, H6, PrimaryText, SecondaryText, CaptionText } from '../components';
import { SkillsList } from './SkillsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ButtonLink } from '../components';

/* 
    This page is the homepage with all the useful information most people might be looking for.
    on display: 
    react-spring
    css-grid
    styled components
    custom reusable components
*/

export const Homepage = () => {
    return (
        <StyledHomepage>
            <StyledTitle>Hello and welcome! My name is Trevor Martz.</StyledTitle>
            <StyledResume>
                <StyledResumeText>Here is a download of my resume</StyledResumeText>
                <ButtonLink label="Download Pdf" href={TrevorResume} target="_blank" rel="noreferrer" />
            </StyledResume>
            <StyledArrow>
                <H4>That is me</H4> <StyledArrowIcon icon={faArrowRight} />
            </StyledArrow>
            <StyledFaceWrapper>
                <StyledFace src={TrevorFace} alt="this is me" />
            </StyledFaceWrapper>
            <StyledIntro>
                <PrimaryText>
                    I am a senior software engineer, primarily for front end/ui work. I graduated from Neumont
                    University with a degree in Computer Science in 2016, and I've been doing development professionally
                    since. I am an American living in New Zealand, and am open to local NZ work or remote US work.
                </PrimaryText>
            </StyledIntro>
            <StyledSkills>
                <SkillsList
                    title="Core Skills"
                    skills={[
                        'Front End/UX Development',
                        'Component Design',
                        'Unit Testing',
                        'Application Design',
                        'Agile Development',
                        'Functional Programming',
                        'Oject Oriented Programming',
                        'Problem Solving',
                        'Api Development',
                    ]}
                />
            </StyledSkills>
            <StyledTechs>
                <SkillsList
                    title="Core Techs"
                    skills={[
                        'Javascript',
                        'React',
                        'Redux',
                        'Jest & Mocha',
                        'React Testing Library',
                        'Many Random React Libraries',
                        'AngularJS',
                        'Node',
                        'Typescript & Flow',
                        'Npm & Yarn',
                        'CSS3 & Styled Components',
                        'HTML5',
                        'C#',
                        'SQL & Mysql',
                        'Golang',
                        'Java',
                    ]}
                />
            </StyledTechs>
            <StyledTools>
                <SkillsList
                    title="Tools"
                    skills={[
                        'Git',
                        'BitBucket & Github',
                        'JIRA & Version One',
                        'VS Code',
                        'Visual Studio',
                        'Webstorm',
                        'SQL Server & Mysql Workbench',
                        'Intellij',
                    ]}
                />
            </StyledTools>
        </StyledHomepage>
    );
};

const StyledHomepage = styled.div`
    display: grid;
    grid-template:
        'title title title'
        'resume arrow face'
        'intro intro intro'
        'skills techs tools';
    grid-column-gap: 16px;
    grid-row-gap: 32px;
`;

const StyledTitle = styled(H3)`
    grid-area: title;
`;

const StyledResume = styled.div`
    grid-area: resume;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledResumeText = styled(PrimaryText)`
    text-align: center;
    margin-bottom: 16px;
    padding: 0 32px;
`;

const StyledArrow = styled.div`
    grid-area: arrow;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledArrowIcon = styled(FontAwesomeIcon)`
    width: 100px;
    height: 100px;
`;

const StyledFaceWrapper = styled.div`
    grid-area: face;
    :before {
        content: '';
        position: absolute;
        width: 400px;
        height: 400px;
        border-radius: 200px;
        box-shadow: inset 0px 0px 75px 25px ${({ theme }) => theme.colors.neutral700};
    }
`;

const StyledFace = styled.img`
    height: 400px;
    width: 400px;
    border-radius: 200px;
    ::after {
    }
`;

const StyledIntro = styled(PrimaryText)`
    grid-area: intro;
`;

const StyledSkills = styled.div`
    grid-area: skills;
`;

const StyledTechs = styled.div`
    grid-area: techs;
`;

const StyledTools = styled.div`
    grid-area: tools;
`;
