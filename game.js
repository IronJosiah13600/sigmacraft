let discoveredElements = ['earth', 'air', 'fire', 'water']; // Starting elements

const combinations = {
    'water+fire': 'steam',
    'earth+fire': 'lava',
    'water+earth': 'mud',
    'air+fire': 'energy',
    'air+water': 'rain',
    'earth+water': 'plant',
    'air+earth': 'dust',
    // Add more combinations as needed
};

function combineElements() {
    let element1 = document.getElementById('element1').value.toLowerCase();
    let element2 = document.getElementById('element2').value.toLowerCase();
    
    if (!discoveredElements.includes(element1) || !discoveredElements.includes(element2)) {
        document.getElementById('combination-result').textContent = "You can only combine discovered elements!";
        return;
    }
    
    let combinationKey = `${element1}+${element2}`;
    let reversedCombinationKey = `${element2}+${element1}`;
    
    let newElement = combinations[combinationKey] || combinations[reversedCombinationKey];
    
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

// Initialize the game with starting elements
updateElementsList();
