import styled from 'styled-components';
import { pokemonList } from './pokeList';
import { useEffect, useState, useCallback } from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

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
    const [enteredPokeName, setEnteredPokeName] = useState('');
    const [currentPoke, setCurrentPoke] = useState(undefined);
    const [previousPoke, setPreviousPoke] = useState(undefined);
    const [pokeOptionList, setPokeOptionList] = useState(pokemonList);
    const [skippedPokeList, setSkippedPokeList] = useState([]);
    const [correctPokeList, setCorrectPokeList] = useState([]);
    console.log('currentPoke', currentPoke);
    console.log('pokeOptionList', pokeOptionList);
    console.log('skippedPokeList', skippedPokeList);

    const selectRandomPokeFromList = useCallback(() => {
        const index = Math.floor(Math.random() * pokeOptionList.length);
        const selected = pokeOptionList[index];
        setCurrentPoke(selected);
        //remove pokemon from the options
        setPokeOptionList(pokeOptionList.filter((item, i) => index !== i));
    }, [pokeOptionList]);

    //TODO this looks visually laggy while waiting for the select random poke.. Add some sort of animation to make it look busy
    const onSkip = useCallback(() => {
        setEnteredPokeName('');
        setPreviousPoke(currentPoke);
        setSkippedPokeList([...skippedPokeList, currentPoke]);
        selectRandomPokeFromList();
    }, [currentPoke, selectRandomPokeFromList, skippedPokeList]);

    const updateCorrectList = useCallback(() => {
        setPreviousPoke(currentPoke);
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
                } else if (enteredName.toLowerCase() === 'idk') {
                    onSkip();
                }
            }
        },
        [currentPoke, onSkip, updateCorrectList]
    );

    //pick a pokemon when we have none.
    useEffect(() => {
        if (!Boolean(currentPoke)) {
            selectRandomPokeFromList();
        }
    }, [currentPoke, selectRandomPokeFromList]);
    return (
        <StyledPokequiz>
            <StyledQuizTop>
                <StyledPokeBox>
                    <StyledImage src={getImageSrc(currentPoke)} />
                    <Input onChange={onEnteredNameChange} placeholder="Enter pokemon name" value={enteredPokeName} />
                    <Button label="skip" onClick={onSkip} />
                </StyledPokeBox>
                <StyledPokeBox>
                    <StyledImage src={getImageSrc(previousPoke)} />
                    {previousPoke?.name}
                </StyledPokeBox>
            </StyledQuizTop>
            <StyledQuizBottom>
                <Input label="min" />
                <Input label="max" />
                Pokemon Remaining: {pokeOptionList?.length} Pokemon Skipped: {skippedPokeList?.length}
                <div>correct list</div>
                <div>
                    {correctPokeList.map((poke) => (
                        <span>{poke.name}</span>
                    ))}
                </div>
            </StyledQuizBottom>
        </StyledPokequiz>
    );
};

const StyledPokequiz = styled.div``;

const StyledQuizTop = styled.div`
    display: flex;
`;

const StyledPokeBox = styled.div`
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
`;

const StyledImage = styled.img`
    max-width: 400px;
    max-height: 400px;
`;

const StyledQuizBottom = styled.div``;
