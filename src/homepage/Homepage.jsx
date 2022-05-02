import styled from 'styled-components';
import TrevorFace from './TrevorFace.jpg';
import { H1, H2, H3, H4, H5, H6, PrimaryText, SecondaryText, CaptionText } from '../components';
import { SkillsList } from './SkillsList';

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
            <StyledTitle>Hello and welcome! My name is Trevor Martz. This is me.</StyledTitle>
            <StyledFaceWrapper>
                <StyledFace src={TrevorFace} alt="this is me" />
            </StyledFaceWrapper>
            <StyledIntro>
                I am a senior software engineer, primarily for front end/ui work. I graduated from Neumont University
                with a degree in Computer Science in 2016, and I've been doing development professionally since. I am an
                American living in New Zealand, and am open to local NZ work or remote US work.
            </StyledIntro>
            <>Here is a download of my resume in pdf form /* TODO */</>
            <StyledSkills>
                <SkillsList
                    title="
                    Core Skills"
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
            <StyledFrontEndTechs>
                <SkillsList
                    title="Front End Core Techs"
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
                    ]}
                />
            </StyledFrontEndTechs>
            <StyledBackendTechs>
                <SkillsList
                    title="
                    Backend Core Techs"
                    skills={['C#', 'SQL & Mysql', 'Golang', 'Java']}
                />
            </StyledBackendTechs>
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
        'title title title title'
        '. face face .'
        'intro intro intro intro'
        'skills frontend backend tools';
    grid-column-gap: 8px;
`;

const StyledTitle = styled(H3)`
    grid-area: title;
`;

const StyledFaceWrapper = styled.div`
    grid-area: face;
`;

const StyledFace = styled.img`
    width: 100px;
`;

const StyledIntro = styled(PrimaryText)`
    grid-area: intro;
`;

const StyledSkills = styled.div`
    grid-area: skills;
`;
const StyledFrontEndTechs = styled.div`
    grid-area: frontend;
`;
const StyledBackendTechs = styled.div`
    grid-area: backend;
`;
const StyledTools = styled.div`
    grid-area: tools;
`;
