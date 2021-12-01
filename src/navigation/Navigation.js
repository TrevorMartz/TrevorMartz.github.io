import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <StyledNavigation>
            <Link to="/">Home</Link>
            <Link to="/pokequiz">Pokequiz</Link>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.div`
    * {
        margin-right: 16px;
    }
`;
