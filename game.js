let discoveredElements = ['earth', 'air', 'fire', 'water']; // Starting elements

// Define all 50 unique elements
const elements = [
    'water', 'fire', 'earth', 'air', 'steam',
    'lava', 'dust', 'stone', 'metal', 'cloud',
    'rain', 'plant', 'tree', 'grass', 'flower',
    'seeds', 'life', 'energy', 'sun', 'moon',
    'star', 'space', 'time', 'ocean', 'sea',
    'salt', 'sand', 'glass', 'wood', 'house',
    'castle', 'city', 'volcano', 'explosion', 'brick',
    'cement', 'clay', 'pottery', 'computer', 'robot',
    'human', 'wizard', 'vampire', 'werewolf', 'zombie',
    'life', 'death', 'philosopher\'s stone'
];

function combineElements() {
    let element1 = document.getElementById('element1').value.toLowerCase();
    let element2 = document.getElementById('element2').value.toLowerCase();
    
    let newElement = combine(element1, element2);
    
    if (newElement && !discoveredElements.includes(newElement)) {
        discoveredElements.push(newElement);
        updateElementsList();
        document.getElementById('combination-result').textContent = `You created ${newElement}!`;
    } else if (discoveredElements.includes(newElement)) {
        document.getElementById('combination-result').textContent = `${newElement} already discovered!`;
    } else {
        document.getElementById('combination-result').textContent = `Cannot combine ${element1} + ${element2}.`;
    }
}

function getHint() {
    let randomElement = discoveredElements[Math.floor(Math.random() * discoveredElements.length)];
    document.getElementById('hint-text').textContent = `Hint: ${randomElement} can combine with ...`;
}

function updateElementsList() {
    let list = document.getElementById('discovered-elements');
    list.innerHTML = '';
    discoveredElements.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element;
        list.appendChild(li);
    });
}

function combine(element1, element2) {
    // Define combinations here
    if ((element1 === 'water' && element2 === 'fire') || (element1 === 'fire' && element2 === 'water')) {
        return 'steam';
    } else if ((element1 === 'earth' && element2 === 'fire') || (element1 === 'fire' && element2 === 'earth')) {
        return 'lava';
    } else if ((element1 === 'water' && element2 === 'air') || (element1 === 'air' && element2 === 'water')) {
        return 'rain';
    } else if ((element1 === 'plant' && element2 === 'earth') || (element1 === 'earth' && element2 === 'plant')) {
        return 'seeds';
    } else if ((element1 === 'sun' && element2 === 'moon') || (element1 === 'moon' && element2 === 'sun')) {
        return 'star';
    }
    // Add more combinations as needed for all 50 elements
    return null; // Return null if no combination
}

// Initialize the game with starting elements
updateElementsList();
