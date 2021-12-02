import styled from 'styled-components';
import { TypeCount, Types, typeMap } from './typeMap';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '../components/Button';

// I normall keep types at the bottom of the file, but the map in this case needs it delcared before use.
const StyledTypeBubble = styled.div`
    cursor: pointer;
    height: 26px;
    width: 66px;
    border-radius: 4px;
    color: #fff;
    font-size: 0.75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);
    text-transform: uppercase;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 0 4px;

    :hover {
        opacity: 0.85;
    }
`;

const StyledNormal = styled(StyledTypeBubble).attrs(() => ({
    children: 'Normal',
}))`
    background: #aa9;
`;

const StyledFire = styled(StyledTypeBubble).attrs(() => ({
    children: 'Fire',
}))`
    background: #f42;
`;

const StyledWater = styled(StyledTypeBubble).attrs(() => ({
    children: 'water',
}))`
    background: #39f;
`;

const StyledElectric = styled(StyledTypeBubble).attrs(() => ({
    children: 'Electric',
}))`
    background: #fc3;
`;

const StyledGrass = styled(StyledTypeBubble).attrs(() => ({
    children: 'Grass',
}))`
    background: #7c5;
`;

const StyledIce = styled(StyledTypeBubble).attrs(() => ({
    children: 'Ice',
}))`
    background: #6cf;
`;

const StyledFighting = styled(StyledTypeBubble).attrs(() => ({
    children: 'Fighting',
}))`
    background: #b54;
`;

const StyledPoison = styled(StyledTypeBubble).attrs(() => ({
    children: 'Poison',
}))`
    background: #a59;
`;

const StyledGround = styled(StyledTypeBubble).attrs(() => ({
    children: 'Ground',
}))`
    background: #db5;
`;

const StyledFlying = styled(StyledTypeBubble).attrs(() => ({
    children: 'Flying',
}))`
    background: #89f;
`;

const StyledPsychic = styled(StyledTypeBubble).attrs(() => ({
    children: 'Psychic',
}))`
    background: #f59;
`;

const StyledBug = styled(StyledTypeBubble).attrs(() => ({
    children: 'Bug',
}))`
    background: #ab2;
`;

const StyledRock = styled(StyledTypeBubble).attrs(() => ({
    children: 'Rock',
}))`
    background: #ba6;
`;

const StyledGhost = styled(StyledTypeBubble).attrs(() => ({
    children: 'Ghost',
}))`
    background: #66b;
`;

const StyledDragon = styled(StyledTypeBubble).attrs(() => ({
    children: 'Dragon',
}))`
    background: #76e;
`;

const StyledDark = styled(StyledTypeBubble).attrs(() => ({
    children: 'Dark',
}))`
    background: #754;
`;

const StyledSteel = styled(StyledTypeBubble).attrs(() => ({
    children: 'Steel',
}))`
    background: #aab;
`;

const StyledFairy = styled(StyledTypeBubble).attrs(() => ({
    children: 'Fairy',
}))`
    background: #e9e;
`;

const TypeToComponentMap = {
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

const QuestionFormats = {
    TrueFalse: 1, //is {type} super effective against {type}?
    WhoWouldWin: 2, //What would win? {type} {tie} {type}
    UseAgainst: 3, //What should you use against {type}? select from list of other types.
};

export const PokeTypeQuiz = () => {
    const [answer, setAnswer] = useState('Choose an option to get your first question');
    const [questionFormat, setQuestionFormat] = useState(QuestionFormats.TrueFalse);
    const [questionPokeType, setQuestionPokeType] = useState(Types.Fire);
    const [trueFalseAgainst, setTrueFalseAgainst] = useState();

    const reset = () => {
        setTrueFalseAgainst(undefined);
    };

    const onTrueClick = useCallback(() => {
        if (typeMap[questionPokeType].effective.indexOf(trueFalseAgainst) > -1) {
            setAnswer(`Yes, that was correct! ${questionPokeType} is super effective against ${trueFalseAgainst}.`);
        } else if (typeMap[questionPokeType].nonEffective.indexOf(trueFalseAgainst) > -1) {
            setAnswer(
                `Sorry, that was incorrect. ${questionPokeType} is not very effective against ${trueFalseAgainst}.`
            );
        } else if (typeMap[questionPokeType].noEffect.indexOf(trueFalseAgainst) > -1) {
            setAnswer(`Sorry, that was incorrect. ${questionPokeType} is has no effect against ${trueFalseAgainst}.`);
        } else {
            setAnswer(
                `Sorry, that was incorrect. ${questionPokeType} is average effectiveness against ${trueFalseAgainst}.`
            );
        }
        reset();
    }, [questionPokeType, trueFalseAgainst]);

    const onFalseClick = useCallback(() => {
        if (typeMap[questionPokeType].effective.indexOf(trueFalseAgainst) > -1) {
            setAnswer(`Sorry, that was incorrect. ${questionPokeType} is super effective against ${trueFalseAgainst}.`);
        } else if (typeMap[questionPokeType].nonEffective.indexOf(trueFalseAgainst) > -1) {
            setAnswer(`Yes, that was correct! ${questionPokeType} is not very effective against ${trueFalseAgainst}.`);
        } else if (typeMap[questionPokeType].noEffect.indexOf(trueFalseAgainst) > -1) {
            setAnswer(`Yes, that was correct! ${questionPokeType} is has no effect against ${trueFalseAgainst}.`);
        } else {
            setAnswer(
                `Yes, that was correct! ${questionPokeType} is average effectiveness against ${trueFalseAgainst}.`
            );
        }
        reset();
    }, [questionPokeType, trueFalseAgainst]);

    //game control
    useEffect(() => {
        setQuestionPokeType(Math.floor(Math.random() * TypeCount) + 1);
        if (questionFormat === QuestionFormats.TrueFalse && !Boolean(trueFalseAgainst)) {
            setTrueFalseAgainst(Math.floor(Math.random() * TypeCount) + 1);
        }
    }, [questionFormat, trueFalseAgainst]);
    return (
        <StyledPokeTypeQuiz>
            {questionFormat === QuestionFormats.TrueFalse && (
                <StyledTrueFalse>
                    Is {TypeToComponentMap[questionPokeType]} Super Effective against{' '}
                    {TypeToComponentMap[trueFalseAgainst]}
                    <Button label="True" onClick={onTrueClick} />
                    <Button label="False" onClick={onFalseClick} />
                </StyledTrueFalse>
            )}
            {answer}
        </StyledPokeTypeQuiz>
    );
};
//{Object.entries(Types).map((type) => TypeToComponentMap[type[1]])}

const StyledPokeTypeQuiz = styled.div``;

const StyledTrueFalse = styled.div`
    display: flex;
`;
