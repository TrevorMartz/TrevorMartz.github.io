import styled from 'styled-components';
import { useSpeechSynthesis } from 'react-speech-kit';
import { femaleNames } from './femaleNames';
import { maleNames } from './maleNames';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const Names = () => {
    const [selectedVoice, setSelectedVoice] = useState(1);
    const [incudeMaleNames, setIncudeMaleNames] = useState(true);
    const [incudeFemaleNames, setIncudeFemaleNames] = useState(true);
    const [currentName, setCurrentName] = useState('');
    const [initialCountOfNamesToShow, setInitialCountOfNamesToShow] = useState(10);
    const [countOfNamesToShow, setCountOfNamesToShow] = useState(0);
    const [maleNamesNotShown, setMaleNamesNotShown] = useState([]);
    const [femaleNamesNotShown, setFemaleNamesNotShown] = useState([]);

    const onSpeechEnd = () => {
        setCountOfNamesToShow((count) => count - 1);
    };
    const { speak, voices } = useSpeechSynthesis({ onEnd: onSpeechEnd });

    const onNameCountChange = (event) => {
        const value = event.target.value;
        const parsed = parseInt(value);
        if (parsed !== NaN && parsed > 0) {
            setInitialCountOfNamesToShow(parsed);
        }
    };

    const voiceOptions = useMemo(() => {
        let options = voices.map((voice, index) => {
            return <option value={index}>{voice.name}</option>;
        });
        return options;
    }, [voices]);

    const getRandomName = () => {
        let getMaleName = true;
        if (incudeMaleNames && incudeFemaleNames) {
            //50% chance to get a male name or female name when both are true
            if (getRandomInt(1) === 0) {
                getMaleName = false;
            }
        } else if (incudeFemaleNames && !incudeMaleNames) {
            getMaleName = false;
        }
        let name;
        if (getMaleName) {
            let index = getRandomInt(maleNamesNotShown.length);
            name = maleNamesNotShown[index];
            setMaleNamesNotShown((names) => names.filter((_, i) => i !== index));
        } else {
            let index = getRandomInt(femaleNamesNotShown.length);
            name = femaleNamesNotShown[index];
            setFemaleNamesNotShown((names) => names.filter((_, i) => i !== index));
        }
        return name;
    };

    const runTextToSpeech = (text) => {
        speak({ text: text, voice: voices[selectedVoice] });
    };

    const startShowingNames = () => {
        setCountOfNamesToShow(initialCountOfNamesToShow);
        setMaleNamesNotShown([...maleNames]);
        setFemaleNamesNotShown([...femaleNames]);
    };

    useEffect(() => {
        if (countOfNamesToShow > 0) {
            const name = getRandomName();
            setCurrentName(name);
            runTextToSpeech(name);
        } else {
            setCurrentName('');
        }
    }, [countOfNamesToShow]);

    return (
        <StyledNames>
            <div>This is a tool to read random names, meant to help you find the right name for your child.</div>
            <div>
                <select onChange={(event) => setSelectedVoice(event.target.value)} value={selectedVoice}>
                    {voiceOptions}
                </select>
                <div>
                    Male Names
                    <input
                        type="checkbox"
                        checked={incudeMaleNames}
                        onClick={() => setIncudeMaleNames(!incudeMaleNames)}
                    />
                </div>
                <div>
                    Female Names
                    <input
                        type="checkbox"
                        checked={incudeFemaleNames}
                        onClick={() => setIncudeFemaleNames(!incudeFemaleNames)}
                    />
                    <Input
                        label="How many names to read"
                        onChange={onNameCountChange}
                        value={initialCountOfNamesToShow}
                    />
                </div>
            </div>
            <StyledCurrentNameWrapper>
                <div>{countOfNamesToShow > 0 && initialCountOfNamesToShow - countOfNamesToShow + 1}</div>
                <StyledDivider>-</StyledDivider>
                <StyledCurrentName>{currentName}</StyledCurrentName>
            </StyledCurrentNameWrapper>
            <Button label="Random Names" onClick={startShowingNames}></Button>
        </StyledNames>
    );
};

const StyledNames = styled.div`
    display: flex;
    flex-direction: column;
    * {
        margin-top: 16px;
    }
`;

const StyledCurrentNameWrapper = styled.div`
    background: black;
    color: white;
    width: 100%;
    height: 500px;
    font-family: 'Luminari';
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const StyledDivider = styled.div`
    margin: 16px 8px 0;
`;

const StyledCurrentName = styled.div`
    font-size: 30px;
`;
