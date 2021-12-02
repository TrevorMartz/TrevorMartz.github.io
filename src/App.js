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
                <div>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="pokequiz" element={<PokeQuiz />} />
                        <Route path="poketypequiz" element={<PokeTypeQuiz />} />
                    </Routes>
                </div>
            </StyledApp>
        </BrowserRouter>
    );
};

const StyledApp = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

export default App;
