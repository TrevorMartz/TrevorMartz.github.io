//{type} is {multiplier} against {type}/{type}?
import { TypeCount, Types, typeMap } from './Types';
import {
    Styled1xEffective,
    Styled2xEffective,
    Styled4xEffective,
    StyledHalfEffective,
    StyledQuarterEffective,
    TypeToComponentMap,
} from './SharedStyles';
import { useEffect, useCallback, useState } from 'react';

export const MultipleChoice = () => {
    const [typeA, setTypeA] = useState(Types.Normal);
    const [typeB, setTypeB] = useState(Types.Normal);
    return (
        <div>
            {TypeToComponentMap[typeA]} is <Styled1xEffective /> <Styled2xEffective /> <Styled4xEffective />
            <StyledHalfEffective />
            <StyledQuarterEffective />
            against {TypeToComponentMap[typeB]}
            {Object.entries(Types).map((type) => TypeToComponentMap[type[1]])}
        </div>
    );
};
