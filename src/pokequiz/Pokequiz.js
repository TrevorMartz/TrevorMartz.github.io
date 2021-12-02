import styled from 'styled-components';
import { fullPokemonList } from './fullPokemonList';
import { useEffect, useState, useCallback } from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

/* 
    This app is a fun little quiz to let you see how well you know(and spell) various pokemon names.
    on display: 
    use of hooks
    flexbox
    styled components
    custom reusable components
*/

const getImageSrc = (poke) => {
    if (!Boolean(poke)) {
        return '';
    }
    if (poke.customURL) {
        return poke.customURL;
    }
    let imageName = poke?.imgName || poke?.name;
    return `https://img.pokemondb.net/artwork/large/${imageName.toLowerCase()}.jpg`;
};

export const PokeQuiz = () => {
    const [victory, setVictory] = useState('');
    const [enteredPokeName, setEnteredPokeName] = useState('');
    const [minNum, setMinNum] = useState('1');
    const [maxNum, setMaxNum] = useState(fullPokemonList.length.toString());
    const [currentPoke, setCurrentPoke] = useState(undefined);
    const [previousPoke, setPreviousPoke] = useState(undefined);
    const [pokeOptionList, setPokeOptionList] = useState(fullPokemonList);
    const [skippedPokeList, setSkippedPokeList] = useState([]);
    const [correctPokeList, setCorrectPokeList] = useState([]);

    const selectRandomPokeFromList = useCallback(() => {
        const index = Math.floor(Math.random() * pokeOptionList.length);
        const selected = pokeOptionList[index];
        setCurrentPoke(selected);
        //remove pokemon from the options
        setPokeOptionList(pokeOptionList.filter((item, i) => index !== i));
        //TODO animate current poke sliding over into previous poke.
        setPreviousPoke(currentPoke);
    }, [currentPoke, pokeOptionList]);

    const onSkip = useCallback(() => {
        setEnteredPokeName('');
        setSkippedPokeList([...skippedPokeList, currentPoke]);
        selectRandomPokeFromList();
    }, [currentPoke, selectRandomPokeFromList, skippedPokeList]);

    const updateCorrectList = useCallback(() => {
        setCorrectPokeList([...correctPokeList, currentPoke]);
        selectRandomPokeFromList();
    }, [correctPokeList, currentPoke, selectRandomPokeFromList]);

    const onEnteredNameChange = useCallback(
        (event) => {
            if (currentPoke) {
                const enteredName = event.currentTarget.value;
                setEnteredPokeName(enteredName);
                if (currentPoke.name.toLowerCase() === enteredName) {
                    setEnteredPokeName('');
                    updateCorrectList();
                } else if (enteredName.toLowerCase() === 'idk' || enteredName.toLowerCase() === 'skip') {
                    onSkip();
                }
            }
        },
        [currentPoke, onSkip, updateCorrectList]
    );

    const onMinChange = useCallback((event) => {
        const enteredNum = event.currentTarget.value;
        setMinNum(enteredNum);
    }, []);

    const onMaxChange = useCallback((event) => {
        const enteredNum = event.currentTarget.value;
        setMaxNum(enteredNum);
    }, []);

    //pick a pokemon when we have none.
    useEffect(() => {
        if (!Boolean(currentPoke)) {
            selectRandomPokeFromList();
        }
    }, [currentPoke, selectRandomPokeFromList]);

    //reset when filters change
    useEffect(() => {
        const parsedMinNum = parseInt(minNum);
        const parsedMaxNum = parseInt(maxNum);
        if (isNaN(parsedMinNum)) {
            console.error('invalid min num');
            return;
        }
        if (isNaN(parsedMaxNum)) {
            console.error('invalid max num');
            return;
        }
        if (parsedMinNum >= parsedMaxNum) {
            console.error('max number must be greater than min num');
            return;
        }
        setPokeOptionList(fullPokemonList.slice(minNum - 1, maxNum));
        setCorrectPokeList([]);
        setSkippedPokeList([]);
        setCurrentPoke(undefined);
    }, [maxNum, minNum]);

    //handle end of list
    useEffect(() => {
        if (pokeOptionList.length === 0) {
            //retry the skipped pokes
            if (skippedPokeList.length > 0) {
                setPokeOptionList(skippedPokeList);
                setSkippedPokeList([]);
            } // win condition
            else {
                //TODO bug, this triggers 1 poke too soon
                setVictory(true);
            }
        }
    }, [pokeOptionList, skippedPokeList]);

    return (
        <StyledPokequiz>
            <StyledQuizTop>
                <StyledPokeBox>
                    <StyledImage src={getImageSrc(currentPoke)} />
                    <StyledAnwserInput>
                        <Input
                            onChange={onEnteredNameChange}
                            placeholder="Enter pokemon name"
                            value={enteredPokeName}
                        />
                        <Button label="skip" onClick={onSkip} />
                    </StyledAnwserInput>
                </StyledPokeBox>
                <StyledPokeBox>
                    <StyledImage src={getImageSrc(previousPoke)} />
                    {previousPoke?.name}
                </StyledPokeBox>
            </StyledQuizTop>
            <StyledQuizBottom>
                <Input label="Min pokedex num" type="number" value={minNum} onChange={onMinChange} />
                <Input label="Max pokedex num" type="number" value={maxNum} onChange={onMaxChange} />
                <div>Pokemon Remaining: {pokeOptionList?.length}</div>
                <div>Pokemon Skipped: {skippedPokeList?.length}</div>
                <div>correct list</div>
                <StyledCorrectList>
                    {correctPokeList
                        .sort((a, b) => a.num > b.num)
                        .map((poke) => (
                            <StyledCorrectListItem>
                                {poke.num} {poke.name}
                            </StyledCorrectListItem>
                        ))}
                </StyledCorrectList>
            </StyledQuizBottom>
            {victory && <div>YOU CAUGHT THEM ALL</div>}
        </StyledPokequiz>
    );
};

const StyledPokequiz = styled.div``;

const StyledQuizTop = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const StyledPokeBox = styled.div`
    width: 400px;
    height: 500px;
    margin: 16px;
    padding: 8px;
    border: 2px solid grey;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const StyledAnwserInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 80px;
`;

const StyledImage = styled.img`
    max-width: 400px;
    max-height: 400px;
`;

const StyledQuizBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledCorrectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 16px 32px;
`;

const StyledCorrectListItem = styled.div`
    width: 150px;
`;
