import { H1, H2, H3, H4, H5, H6, ButtonText, PrimaryText, SecondaryText, CaptionText, Button } from '.';
import styled from 'styled-components';

export const Components = () => {
    return (
        <StyledComponents>
            <H1>H1 Almost before we knew it, we had left the grove</H1>
            <H2>H2 Almost before we knew it, we had left the grove</H2>
            <H3>H3 Almost before we knew it, we had left the grove</H3>
            <H4>H4 Almost before we knew it, we had left the grove</H4>
            <H5>H5 Almost before we knew it, we had left the grove</H5>
            <H6>H6 Almost before we knew it, we had left the grove</H6>
            <ButtonText>ButtonText Almost before we knew it, we had left the grove</ButtonText>
            <PrimaryText>PrimaryText Almost before we knew it, we had left the grove</PrimaryText>
            <SecondaryText>SecondaryText Almost before we knew it, we had left the grove</SecondaryText>
            <CaptionText>CaptionText Almost before we knew it, we had left the grove</CaptionText>
            <Button label="This is a button" />
        </StyledComponents>
    );
};

const StyledComponents = styled.div`
    display: flex;
    flex-direction: column;
`;
