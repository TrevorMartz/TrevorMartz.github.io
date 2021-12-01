var minPokeNumber = 1;
var maxPokeNumber = pokemonList.length;
var currentPoke;
var imgSrc;
var correctList = [];
var optionList = [];
var skippedList = [];

function setImg() {
    if (currentPoke.customURL) {
        imgSrc = currentPoke.customURL;
    } else if (currentPoke.imgName) {
        imgSrc = 'https://img.pokemondb.net/artwork/large/' + currentPoke.imgName.toLowerCase() + '.jpg';
    } else {
        imgSrc = 'https://img.pokemondb.net/artwork/large/' + currentPoke.name.toLowerCase() + '.jpg';
    }
    document.getElementById('pokeImg').src = imgSrc;
}

function nextPoke() {
    if (optionList.length == 0) {
        if (skippedList.length > 0) {
            document.getElementById('pokemonSkipped').innerHTML = 'Pokemon Skipped: 0';
            optionList = skippedList;
            document.getElementById('pokemonRemaining').innerHTML = 'Pokemon Remaining: ' + optionList.length;
            skippedList = [];
            selectRandomPoke();
        } else {
            document.getElementById('correctHeader').innerHTML += ' CONGRATULATIONS! YOU CAUGHT THEM ALL!';
            document.getElementById('pokemonRemaining').innerHTML = 'Pokemon Remaining: 0';
            currentPoke = undefined;
        }
    } else {
        document.getElementById('pokemonRemaining').innerHTML = 'Pokemon Remaining: ' + optionList.length;
        selectRandomPoke();
    }
}

function selectRandomPoke() {
    setPrevious();
    var index = Math.floor(Math.random() * optionList.length);
    currentPoke = optionList[index];
    //remove pokemon from the options
    optionList.splice(index, 1);
    setImg();
}

function updateCorrectList() {
    correctList.push(currentPoke);
    document.getElementById('correctHeader').innerHTML = 'Correct List ' + correctList.length;
    document.getElementById('correctList').innerHTML += '<div>' + currentPoke.name + '</div>';
}

function createOptionList() {
    optionList = [];
    skippedList = [];
    for (var i = minPokeNumber - 1; i < maxPokeNumber; i++) {
        optionList.push(pokemonList[i]);
    }
}

function typeEvent() {
    if (currentPoke) {
        var text = document.getElementById('pokeName').value;
        if (currentPoke.name.toLowerCase() == text.toLowerCase()) {
            document.getElementById('pokeName').value = '';
            updateCorrectList();
            nextPoke();
        } else if ('idk' == text.toLowerCase()) {
            skip();
        }
    }
}

function setPrevious() {
    if (currentPoke) {
        document.getElementById('previousImg').src = imgSrc;
        document.getElementById('previousName').innerHTML = currentPoke.name;
    }
}

function skip() {
    document.getElementById('pokeName').value = '';
    skippedList.push(currentPoke);
    document.getElementById('pokemonSkipped').innerHTML = 'Pokemon Skipped: ' + skippedList.length;
    nextPoke();
}

function rangeChange() {
    var minNum = parseInt(document.getElementById('minNum').value);
    var restart = false;
    if (minNum != minPokeNumber) {
        restart = true;
        minPokeNumber = minNum;
    }
    if (minPokeNumber < 1) {
        minPokeNumber = 1;
        document.getElementById('minNum').value = minPokeNumber;
    }
    var maxNum = parseInt(document.getElementById('maxNum').value);
    if (maxNum != maxPokeNumber) {
        restart = true;
        maxPokeNumber = maxNum;
    }
    if (maxPokeNumber > pokemonList.length) {
        maxPokeNumber = pokemonList.length;
        document.getElementById('maxNum').value = maxPokeNumber;
    } else if (maxPokeNumber < 1) {
        maxPokeNumber = 1;
        document.getElementById('maxNum').value = maxPokeNumber;
    }

    if (minPokeNumber > maxPokeNumber) {
        minPokeNumber = maxPokeNumber;
        document.getElementById('minNum').value = minPokeNumber;
    }
    if (restart) {
        createOptionList();
        nextPoke();
    }
}
