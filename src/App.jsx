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
import { Footer } from './footer/Footer';

export const App = () => {
    return (
        <HashRouter>
            <ThemeProvider theme={theme}>
                <Fonts />
                <StyledPage>
                    <StyledNavigationWrapper>
                        <Navigation />
                    </StyledNavigationWrapper>
                    <StyledContent>
                        <StyledApp>
                            <Routes>
                                <Route exact path="/" element={<Homepage />} />
                                <Route exact path="/components" element={<Components />} />
                                <Route exact path="/pokequiz" element={<PokeQuiz />} />
                                <Route exact path="/poketypequiz" element={<PokeTypeQuiz />} />
                                <Route exact path="/names" element={<Names />} />
                                <Route path="*" element={<div>404 not found</div>} />
                            </Routes>
                        </StyledApp>
                    </StyledContent>
                    <StyledFooterWrapper>
                        <Footer />
                    </StyledFooterWrapper>
                </StyledPage>
            </ThemeProvider>
        </HashRouter>
    );
};

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.neutral50};
    min-height: 100%;
`;

const StyledNavigationWrapper = styled.div`
    margin-bottom: 32px;
`;

//This creates a minimum margin so the content never touches the sides of the screen
const StyledContent = styled.div`
    min-height: 100%;
    flex-grow: 100;
    padding: 0 32px;
    margin-bottom: 64px;
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletWidth}) {
        padding: 0 16px;
    }
`;

const StyledApp = styled.div`
    max-width: ${({ theme }) => theme.breakpoints.maxWidth};
    margin: 0 auto;
`;

const StyledFooterWrapper = styled.div`
    display: flex;
`;
