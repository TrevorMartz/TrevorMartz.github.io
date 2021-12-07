import { PokeQuiz } from './pokequiz/Pokequiz';
import { PokeTypeQuiz } from './poketypequiz/PokeTypeQuiz';
import { Homepage } from './homepage/Homepage';
import { Navigation } from './navigation/Navigation';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <StyledApp>
                <Navigation />
                <StyledContent>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="pokequiz" element={<PokeQuiz />} />
                        <Route path="poketypequiz" element={<PokeTypeQuiz />} />
                    </Routes>
                </StyledContent>
            </StyledApp>
        </BrowserRouter>
    );
};

const StyledApp = styled.div`
    max-width: 1440px;
    margin: 0 10%;

    @media (max-width: 720px) {
        margin: 0 5%;
    }
`;

const StyledContent = styled.div`
    margin-top: 16px;
`;

export default App;
