import styled from 'styled-components';
import { TypeCount, Types, typeMap } from './components/Types';
import { useCallback, useEffect, useState } from 'react';
import { Tab, Tabs } from '../components/Tab';
import { MultipleChoice } from './components/MultipleChoice';
import { WhatWouldWin } from './components/WhatWouldWin';

const QuestionFormats = {
    MultipleChoice: 1, //{type} is {multiplier} against {type}/{type}?
    WhatWouldWin: 2, //What would win? {type} {tie} {type}
    UseAgainst: 3, //What should you use against {type}? select from list of all other types.
};

export const PokeTypeQuiz = () => {
    // const [answer, setAnswer] = useState('Choose an option to get your first question');
    const [questionFormat, setQuestionFormat] = useState(QuestionFormats.TrueFalse);
    // const [questionPokeType, setQuestionPokeType] = useState(Types.Fire);
    // const [trueFalseAgainst, setTrueFalseAgainst] = useState();

    // const reset = () => {
    //     setTrueFalseAgainst(undefined);
    // };

    // const onTrueClick = useCallback(() => {
    //     if (typeMap[questionPokeType].effective.indexOf(trueFalseAgainst) > -1) {
    //         setAnswer(`Yes, that was correct! ${questionPokeType} is super effective against ${trueFalseAgainst}.`);
    //     } else if (typeMap[questionPokeType].nonEffective.indexOf(trueFalseAgainst) > -1) {
    //         setAnswer(
    //             `Sorry, that was incorrect. ${questionPokeType} is not very effective against ${trueFalseAgainst}.`
    //         );
    //     } else if (typeMap[questionPokeType].noEffect.indexOf(trueFalseAgainst) > -1) {
    //         setAnswer(`Sorry, that was incorrect. ${questionPokeType} is has no effect against ${trueFalseAgainst}.`);
    //     } else {
    //         setAnswer(
    //             `Sorry, that was incorrect. ${questionPokeType} is average effectiveness against ${trueFalseAgainst}.`
    //         );
    //     }
    //     reset();
    // }, [questionPokeType, trueFalseAgainst]);

    // const onFalseClick = useCallback(() => {
    //     if (typeMap[questionPokeType].effective.indexOf(trueFalseAgainst) > -1) {
    //         setAnswer(`Sorry, that was incorrect. ${questionPokeType} is super effective against ${trueFalseAgainst}.`);
    //     } else if (typeMap[questionPokeType].nonEffective.indexOf(trueFalseAgainst) > -1) {
    //         setAnswer(`Yes, that was correct! ${questionPokeType} is not very effective against ${trueFalseAgainst}.`);
    //     } else if (typeMap[questionPokeType].noEffect.indexOf(trueFalseAgainst) > -1) {
    //         setAnswer(`Yes, that was correct! ${questionPokeType} is has no effect against ${trueFalseAgainst}.`);
    //     } else {
    //         setAnswer(
    //             `Yes, that was correct! ${questionPokeType} is average effectiveness against ${trueFalseAgainst}.`
    //         );
    //     }
    //     reset();
    // }, [questionPokeType, trueFalseAgainst]);

    //game control
    // useEffect(() => {
    //     setQuestionPokeType(Math.floor(Math.random() * TypeCount) + 1);
    //     if (questionFormat === QuestionFormats.TrueFalse && !Boolean(trueFalseAgainst)) {
    //         setTrueFalseAgainst(Math.floor(Math.random() * TypeCount) + 1);
    //     }
    // }, [questionFormat, trueFalseAgainst]);
    return (
        <StyledPokeTypeQuiz>
            <Tabs selectedName={questionFormat} onChange={setQuestionFormat}>
                <Tab name={QuestionFormats.TrueFalse} label="Multiple Choice">
                    <MultipleChoice />
                </Tab>
                <Tab name={QuestionFormats.WhatWouldWin} label="What Would Win?">
                    <WhatWouldWin />
                </Tab>
            </Tabs>
            {/* {questionFormat === QuestionFormats.TrueFalse && (
                <StyledTrueFalse>
                    Is {TypeToComponentMap[questionPokeType]} Super Effective against{' '}
                    {TypeToComponentMap[trueFalseAgainst]}
                    <Button label="True" onClick={onTrueClick} />
                    <Button label="False" onClick={onFalseClick} />
                </StyledTrueFalse>
            )}
            {answer} */}
        </StyledPokeTypeQuiz>
    );
};
//{Object.entries(Types).map((type) => TypeToComponentMap[type[1]])}

const StyledPokeTypeQuiz = styled.div``;
