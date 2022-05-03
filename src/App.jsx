import { PokeQuiz } from './pokequiz/Pokequiz';
import { PokeTypeQuiz } from './poketypequiz/PokeTypeQuiz';
import { Names } from './names/Names';
import { Components } from './components/Components';
import { Homepage } from './homepage/Homepage';
import { Navigation } from './navigation/Navigation';
import styled, { ThemeProvider } from 'styled-components';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { theme } from './theme/theme';
import { Fonts } from './theme/Fonts';

export const App = () => {
    return (
        <HashRouter>
            <ThemeProvider theme={theme}>
                <Fonts />
                <Navigation />
                <StyledPage>
                    <StyledApp>
                        <StyledContent>
                            <Routes>
                                <Route path="/" element={<Homepage />} />
                                <Route path="components" element={<Components />} />
                                <Route path="pokequiz" element={<PokeQuiz />} />
                                <Route path="poketypequiz" element={<PokeTypeQuiz />} />
                                <Route path="names" element={<Names />} />
                            </Routes>
                        </StyledContent>
                    </StyledApp>
                </StyledPage>
            </ThemeProvider>
        </HashRouter>
    );
};

//This creates a minimum margin so the page never touches the sides of the screen
const StyledPage = styled.div`
    padding: 32px 32px 0;
    height: 100vh;
    background: ${({ theme }) => theme.colors.neutral100};
`;

const StyledApp = styled.div`
    max-width: ${({ theme }) => theme.breakpoints.maxWidth};
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletWidth}) {
        margin: 0 5%;
    }
`;

const StyledContent = styled.div`
    // margin-top: 16px;
`;
