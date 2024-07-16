let discoveredElements = ['earth', 'air', 'fire', 'water']; // Starting elements

// Define all elements with their possible combinations
const elements = {
    'water': ['water', 'earth', 'air', 'fire'],
    'fire': ['fire', 'earth', 'water', 'air'],
    'earth': ['earth', 'water', 'air', 'fire'],
    'air': ['air', 'fire', 'water', 'earth'],
    'steam': ['water', 'fire'],
    'lava': ['fire', 'earth'],
    'dust': ['earth', 'air'],
    'stone': ['earth', 'fire'],
    'metal': ['fire', 'stone'],
    'cloud': ['air', 'steam'],
    'rain': ['cloud', 'water'],
    'plant': ['earth', 'rain'],
    'tree': ['plant', 'plant'],
    'grass': ['plant', 'earth'],
    'flower': ['plant', 'grass'],
    'seeds': ['plant', 'earth'],
    'life': ['seeds', 'water'],
    'energy': ['life', 'life'],
    'sun': ['fire', 'sky'],
    'moon': ['night', 'sky'],
    'star': ['sun', 'moon'],
    'space': ['star', 'star'],
    'time': ['night', 'day'],
    'ocean': ['water', 'sea'],
    'sea': ['water', 'salt'],
    'salt': ['sun', 'sea'],
    'sand': ['stone', 'sea'],
    'glass': ['sand', 'fire'],
    'wood': ['tree', 'tool'],
    'house': ['wood', 'brick'],
    'castle': ['knight', 'house'],
    'city': ['skyscraper', 'skyscraper'],
    'volcano': ['lava', 'earth'],
    'explosion': ['gunpowder', 'fire'],
    'brick': ['fire', 'clay'],
    'cement': ['clay', 'limestone'],
    'clay': ['mud', 'sand'],
    'pottery': ['fire', 'clay'],
    'computer': ['electricity', 'tool'],
    'robot': ['metal', 'computer'],
    'human': ['earth', 'life'],
    'wizard': ['human', 'magic'],
    'vampire': ['human', 'blood'],
    'werewolf': ['human', 'wolf'],
    'zombie': ['human', 'corpse'],
    'life': ['energy', 'small'],
    'death': ['life', 'life'],
    'philosopher\'s stone': ['alchemist', 'stone'],
};

function combineElements() {
    let element1 = document.getElementById('element1').value.toLowerCase();
    let element2 = document.getElementById('element2').value.toLowerCase();
    
    if (!discoveredElements.includes(element1) || !discoveredElements.includes(element2)) {
        document.getElementById('combination-result').textContent = "You can only combine discovered elements!";
        return;
    }
    
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
    // Find possible combination
    for (let key in elements) {
        if (elements[key].includes(element1) && elements[key].includes(element2)) {
            return key;
        }
    }
    return null; // Return null if no combination found
}

// Initialize the game with starting elements
updateElementsList();