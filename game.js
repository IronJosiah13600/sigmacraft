const startingElements = ['earth', 'air', 'fire', 'water'];
const combinations = {
    'earth+water': 'mud',
    'fire+air': 'energy',
    'earth+fire': 'lava',
    'air+water': 'rain',
    'water+fire': 'steam',
    'earth+air': 'dust',
    'mud+fire': 'brick',
    'mud+air': 'clay',
    'energy+earth': 'earthquake',
    'energy+air': 'storm',
    'energy+water': 'wave',
    'energy+fire': 'explosion',
    'lava+water': 'stone',
    'lava+air': 'ash',
    'lava+earth': 'volcano',
    'rain+earth': 'plant',
    'rain+fire': 'boil',
    'rain+air': 'cloud',
    'rain+water': 'flood',
    'steam+earth': 'geyser',
    'steam+air': 'mist',
    'steam+fire': 'engine',
    'dust+water': 'mud',
    'dust+fire': 'smoke',
    'dust+air': 'sand',
    'brick+earth': 'house',
    'brick+fire': 'glass',
    'brick+water': 'cement',
    'clay+fire': 'pottery',
    'clay+water': 'swamp',
    'clay+earth': 'mudbrick',
    'earthquake+water': 'tsunami',
    'earthquake+fire': 'eruption',
    'earthquake+air': 'storm',
    'storm+water': 'hurricane',
    'storm+fire': 'thunderstorm',
    'storm+earth': 'tornado',
    'wave+earth': 'beach',
    'wave+fire': 'steam',
    'wave+air': 'tsunami',
    'explosion+earth': 'crater',
    'explosion+water': 'boil',
    'explosion+air': 'firework',
    'stone+water': 'sandstone',
    'stone+air': 'dust',
    'stone+fire': 'metal',
    'ash+water': 'pumice',
    'ash+earth': 'fertilizer',
    'volcano+air': 'eruption',
    'volcano+water': 'island',
    'house+plant': 'garden',
    'house+fire': 'chimney',
    'plant+water': 'flower',
    'plant+earth': 'tree',
    'plant+air': 'pollen',
    'flower+earth': 'garden',
    'flower+water': 'bouquet',
    'tree+fire': 'charcoal',
    'tree+water': 'fruit',
    'tree+earth': 'forest',
    'forest+fire': 'wildfire',
    'forest+water': 'swamp',
    'forest+air': 'oxygen'
};

const discoveredElements = new Set(startingElements);

function init() {
    const availableElementsDiv = document.getElementById('available-elements');
    startingElements.forEach(element => {
        availableElementsDiv.appendChild(createElementDiv(element));
    });
}

function createElementDiv(element) {
    const div = document.createElement('div');
    div.className = 'element';
    div.textContent = element;
    div.onclick = () => selectElement(element);
    return div;
}

function selectElement(element) {
    const selectedElementsDiv = document.getElementById('selected-elements');
    if (selectedElementsDiv.children.length < 2) {
        const div = document.createElement('div');
        div.className = 'element';
        div.textContent = element;
        selectedElementsDiv.appendChild(div);
    }
}

function combineElements() {
    const selectedElementsDiv = document.getElementById('selected-elements');
    if (selectedElementsDiv.children.length === 2) {
        const element1 = selectedElementsDiv.children[0].textContent;
        const element2 = selectedElementsDiv.children[1].textContent;
        const combinationKey = createCombinationKey(element1, element2);
        const newElement = combinations[combinationKey];
        if (newElement && !discoveredElements.has(newElement)) {
            discoveredElements.add(newElement);
            document.getElementById('discovered-elements').appendChild(createElementDiv(newElement));
            document.getElementById('available-elements').appendChild(createElementDiv(newElement));
        }
        selectedElementsDiv.innerHTML = '';
    }
}

function createCombinationKey(element1, element2) {
    return [element1, element2].sort().join('+');
}

window.onload = init;
