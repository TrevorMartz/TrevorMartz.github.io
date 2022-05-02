import styled from 'styled-components';
import { Types } from './Types';

//TODO Should this always be a button? Some of the game modes clicking it won't do anything. Maybe make it a prop? 'as=button'
export const StyledTypeBubble = styled.button`
    display: flex;
    cursor: pointer;
    height: 26px;
    width: 66px;
    border-radius: 4px;
    color: #fff;
    font-size: 0.75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
    border: 1px solid rgba(0, 0, 0, 0.2);

    :hover {
        opacity: 0.85;
    }
`;

export const StyledNormal = styled(StyledTypeBubble).attrs(() => ({
    children: 'Normal',
}))`
    background: #aa9;
`;

export const StyledFire = styled(StyledTypeBubble).attrs(() => ({
    children: 'Fire',
}))`
    background: #f42;
`;

export const StyledWater = styled(StyledTypeBubble).attrs(() => ({
    children: 'water',
}))`
    background: #39f;
`;

export const StyledElectric = styled(StyledTypeBubble).attrs(() => ({
    children: 'Electric',
}))`
    background: #fc3;
`;

export const StyledGrass = styled(StyledTypeBubble).attrs(() => ({
    children: 'Grass',
}))`
    background: #7c5;
`;

export const StyledIce = styled(StyledTypeBubble).attrs(() => ({
    children: 'Ice',
}))`
    background: #6cf;
`;

export const StyledFighting = styled(StyledTypeBubble).attrs(() => ({
    children: 'Fighting',
}))`
    background: #b54;
`;

export const StyledPoison = styled(StyledTypeBubble).attrs(() => ({
    children: 'Poison',
}))`
    background: #a59;
`;

export const StyledGround = styled(StyledTypeBubble).attrs(() => ({
    children: 'Ground',
}))`
    background: #db5;
`;

export const StyledFlying = styled(StyledTypeBubble).attrs(() => ({
    children: 'Flying',
}))`
    background: #89f;
`;

export const StyledPsychic = styled(StyledTypeBubble).attrs(() => ({
    children: 'Psychic',
}))`
    background: #f59;
`;

export const StyledBug = styled(StyledTypeBubble).attrs(() => ({
    children: 'Bug',
}))`
    background: #ab2;
`;

export const StyledRock = styled(StyledTypeBubble).attrs(() => ({
    children: 'Rock',
}))`
    background: #ba6;
`;

export const StyledGhost = styled(StyledTypeBubble).attrs(() => ({
    children: 'Ghost',
}))`
    background: #66b;
`;

export const StyledDragon = styled(StyledTypeBubble).attrs(() => ({
    children: 'Dragon',
}))`
    background: #76e;
`;

export const StyledDark = styled(StyledTypeBubble).attrs(() => ({
    children: 'Dark',
}))`
    background: #754;
`;

export const StyledSteel = styled(StyledTypeBubble).attrs(() => ({
    children: 'Steel',
}))`
    background: #aab;
`;

export const StyledFairy = styled(StyledTypeBubble).attrs(() => ({
    children: 'Fairy',
}))`
    background: #e9e;
`;

export const StyledEffectiveBubble = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 30px;
    width: 30px;
    color: #fff;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
    border: 1px solid rgba(0, 0, 0, 0.2);

    :hover {
        opacity: 0.85;
    }
`;

export const Styled1xEffective = styled(StyledEffectiveBubble).attrs(() => ({
    children: '1x',
}))`
    background: #d0d0d0;
`;

export const Styled2xEffective = styled(StyledEffectiveBubble).attrs(() => ({
    children: '2x',
}))`
    background: #4e9a06;
`;

export const Styled4xEffective = styled(StyledEffectiveBubble).attrs(() => ({
    children: '4x',
}))`
    background: #73d216;
`;

export const StyledHalfEffective = styled(StyledEffectiveBubble).attrs(() => ({
    children: '1/2',
}))`
    background: #a40000;
`;

export const StyledQuarterEffective = styled(StyledEffectiveBubble).attrs(() => ({
    children: '1/4',
}))`
    background: #7c0000;
`;

export const TypeToComponentMap = {
    [Types.Normal]: <StyledNormal />,
    [Types.Fire]: <StyledFire />,
    [Types.Water]: <StyledWater />,
    [Types.Electric]: <StyledElectric />,
    [Types.Grass]: <StyledGrass />,
    [Types.Ice]: <StyledIce />,
    [Types.Fighting]: <StyledFighting />,
    [Types.Poison]: <StyledPoison />,
    [Types.Ground]: <StyledGround />,
    [Types.Flying]: <StyledFlying />,
    [Types.Psychic]: <StyledPsychic />,
    [Types.Bug]: <StyledBug />,
    [Types.Rock]: <StyledRock />,
    [Types.Ghost]: <StyledGhost />,
    [Types.Dragon]: <StyledDragon />,
    [Types.Dark]: <StyledDark />,
    [Types.Steel]: <StyledSteel />,
    [Types.Fairy]: <StyledFairy />,
};
