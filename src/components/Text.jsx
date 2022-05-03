import styled, { css } from 'styled-components';

//designed via https://material.io/design/typography/the-type-system.html#type-scale

const StyledBasedText = styled.span`
    font-family: roboto;
    color: ${(props) => {
        if (props.lightest) {
            return props.theme.colors.neutral50;
        } else if (props.lighter) {
            return props.theme.colors.neutral200;
        } else if (props.light) {
            return props.theme.colors.neutral400;
        } else if (props.dark) {
            return props.theme.colors.neutral600;
        } else if (props.darker) {
            return props.theme.colors.neutral800;
        } else {
            //darkest, but also default
            return props.theme.colors.neutral900;
        }
    }};
`;

export const H1 = styled(StyledBasedText).attrs(() => ({
    as: 'h1',
}))`
    margin: 0;
    font-size: 96px;
    letter-spacing: -1.5px;
`;

export const H2 = styled(StyledBasedText).attrs(() => ({
    as: 'h2',
}))`
    margin: 0;
    font-size: 60px;
    letter-spacing: -0.5px;
`;

export const H3 = styled(StyledBasedText).attrs(() => ({
    as: 'h3',
}))`
    margin: 0;
    font-size: 48px;
    letter-spacing: 0px;
`;

export const H4 = styled(StyledBasedText).attrs(() => ({
    as: 'h4',
}))`
    margin: 0;
    font-size: 34px;
    letter-spacing: 0.25px;
`;

export const H5 = styled(StyledBasedText).attrs(() => ({
    as: 'h5',
}))`
    margin: 0;
    font-size: 24px;
    letter-spacing: 0px;
`;

export const H6 = styled(StyledBasedText).attrs(() => ({
    as: 'h6',
}))`
    margin: 0;
    font-size: 20px;
    letter-spacing: 0.15px;
`;

export const ButtonText = styled(StyledBasedText)`
    font-size: 20px;
    letter-spacing: 0.5px;
`;

export const PrimaryText = styled(StyledBasedText)`
    font-size: 16px;
    letter-spacing: 0.5px;
`;

export const SecondaryText = styled(StyledBasedText)`
    font-size: 14px;
    letter-spacing: 0.25px;
`;

export const CaptionText = styled(StyledBasedText)`
    font-size: 12px;
    letter-spacing: 0.4px;
`;
