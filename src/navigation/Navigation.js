import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <StyledNavigation>
            <Link to="/">Home</Link>
            <Link to="/pokequiz">Poke Quiz</Link>
            <Link to="/poketypequiz">Poke Type Quiz</Link>
            <Link to="/names">Name reader</Link>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.div`
    * {
        margin-right: 16px;
    }
`;
