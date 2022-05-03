import styled from 'styled-components';
import { Button } from './Button';

export const ButtonLink = ({ label, href, target, rel }) => {
    return (
        <StyledButtonLink href={href} target={target} rel={rel}>
            <Button label={label}></Button>
        </StyledButtonLink>
    );
};

const StyledButtonLink = styled.a`
    text-decoration: none;
`;
