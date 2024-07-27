const elementsMenu = document.getElementById('elements-menu');
const selectedElementsMenu = document.getElementById('selected-elements-menu');
const selectedElementsDiv = document.getElementById('selected-elements');
const combineButton = document.getElementById('combine-button');

const basicElements = ['earth', 'air', 'fire', 'water'];
const discoveredElements = [...basicElements];
const selectedElements = [];

const combinations = {
    'earth': { 'air': 'dust', 'fire': 'lava', 'water': 'mud' },
    'air': { 'fire': 'energy', 'water': 'mist' },
    'fire': { 'water': 'steam' },
    'dust': { 'water': 'mud' },
    'lava': { 'water': 'stone' },
    'mud': { 'fire': 'brick' },
    'energy': { 'air': 'storm', 'earth': 'earthquake' },
    'mist': { 'earth': 'swamp' },
    'steam': { 'earth': 'geyser' },
    'stone': { 'fire': 'metal' },
    'brick': { 'fire': 'pottery' },
    'storm': { 'earth': 'tornado' },
    'earthquake': { 'stone': 'mountain' },
    'swamp': { 'plant': 'tree' },
    'geyser': { 'steam': 'volcano' },
    'metal': { 'earth': 'gold' },
    'pottery': { 'water': 'clay' },
    'tornado': { 'water': 'hurricane' },
    'mountain': { 'earthquake': 'volcano' },
    'tree': { 'fire': 'ash', 'earth': 'forest' },
    'volcano': { 'lava': 'island' },
    'gold': { 'fire': 'jewel' },
    'clay': { 'fire': 'brick' },
    'forest': { 'tree': 'jungle' },
    'ash': { 'water': 'mud' },
    'island': { 'water': 'continent' },
    'jungle': { 'earth': 'savannah' },
    'ring': { 'metal': 'jewel' },
    'hurricane': { 'earth': 'tsunami' },
    'savannah': { 'fire': 'desert' },
    'planet': { 'air': 'atmosphere' },
    'flood': { 'earth': 'river' },
    'desert': { 'water': 'oasis' },
    'atmosphere': { 'earth': 'sky' },
    'river': { 'earth': 'delta' },
    'oasis': { 'earth': 'mirage' },
    'sky': { 'water': 'rain' },
    'delta': { 'earth': 'plateau' },
    'mirage': { 'earth': 'illusion' },
    'rain': { 'earth': 'rainbow' },
    'plateau': { 'earthquake': 'canyon' },
    'illusion': { 'earth': 'fantasy' },
    'rainbow': { 'water': 'prism' },
    'canyon': { 'water': 'rapids' },
    'fantasy': { 'earth': 'myth' },
    'prism': { 'air': 'spectrum' },
    'rapids': { 'earth': 'waterfall' },
    'myth': { 'earth': 'legend' },
    'spectrum': { 'earth': 'universe' },
    'waterfall': { 'earth': 'spring' },
    'legend': { 'earth': 'history' },
    'universe': { 'earth': 'multiverse' },
    'spring': { 'water': 'river' },
    'history': { 'earth': 'future' },
    'multiverse': { 'earth': 'omniverse' },
    'future': { 'earth': 'destiny' },
    'omniverse': { 'earth': 'reality' },
    'destiny': { 'earth': 'fate' },
    'reality': { 'earth': 'existence' },
    'fate': { 'earth': 'karma' },
    'existence': { 'earth': 'consciousness' },
    'karma': { 'earth': 'soul' },
    'consciousness': { 'earth': 'awareness' },
    'soul': { 'earth': 'spirit' },
    'awareness': { 'earth': 'enlightenment' },
    'spirit': { 'earth': 'ghost' },
    'enlightenment': { 'earth': 'nirvana' },
    'ghost': { 'earth': 'phantom' },
    'nirvana': { 'earth': 'zen' },
    'phantom': { 'earth': 'shade' },
    'zen': { 'earth': 'tranquility' },
    'shade': { 'earth': 'shadow' },
    'tranquility': { 'earth': 'peace' },
    'shadow': { 'earth': 'darkness' },
    'peace': { 'earth': 'harmony' },
    'darkness': { 'earth': 'void' },
    'harmony': { 'earth': 'balance' },
    'void': { 'earth': 'abyss' },
    'balance': { 'earth': 'equilibrium' },
    'abyss': { 'earth': 'end' },
    'equilibrium': { 'earth': 'stability' },
    'end': { 'earth': 'beginning' },
    'stability': { 'earth': 'foundation' },
    'beginning': { 'earth': 'origin' },
    'foundation': { 'earth': 'base' },
    'origin': { 'earth': 'source' },
    'base': { 'earth': 'core' },
    'source': { 'earth': 'root' },
    'core': { 'earth': 'center' },
    'root': { 'earth': 'essence' },
    'center': { 'earth': 'nucleus' },
    'essence': { 'earth': 'element' },
    'nucleus': { 'earth': 'core' },
    'element': { 'earth': 'compound' },
    'compound': { 'earth': 'mixture' },
    'mixture': { 'earth': 'blend' },
    'blend': { 'earth': 'fusion' },
    'fusion': { 'earth': 'synthesis' },
    'synthesis': { 'earth': 'creation' },
    'creation': { 'earth': 'invention' },
    'invention': { 'earth': 'discovery' },
    'discovery': { 'earth': 'revelation' },
    'revelation': { 'earth': 'epiphany' },
    'epiphany': { 'earth': 'realization' },
    'realization': { 'earth': 'understanding' },
    'understanding': { 'earth': 'comprehension' },
    'comprehension': { 'earth': 'insight' },
    'insight': { 'earth': 'perception' },
    'perception': { 'earth': 'cognition' },
    'cognition': { 'earth': 'awareness' },
    'awareness': { 'earth': 'enlightenment' },
};

function updateElementsMenu() {
    elementsMenu.innerHTML = '<h2>Elements</h2>';
    discoveredElements.forEach(element => {
        const button = document.createElement('button');
        button.textContent = element;
        button.onclick = () => selectElement(element);
        elementsMenu.appendChild(button);
    });
}

function updateSelectedElementsMenu() {
    selectedElementsDiv.innerHTML = '';
    selectedElements.forEach(element => {
        const div = document.createElement('div');
        div.textContent = element;
        selectedElementsDiv.appendChild(div);
    });
}

function selectElement(element) {
    if (selectedElements.length < 2 && !selectedElements.includes(element)) {
        selectedElements.push(element);
        updateSelectedElementsMenu();
    }
}

combineButton.onclick = () => {
    if (selectedElements.length === 2) {
        const [element1, element2] = selectedElements;
        const newElement = combinations[element1]?.[element2] || combinations[element2]?.[element1];

        if (newElement && !discoveredElements.includes(newElement)) {
            discoveredElements.push(newElement);
            alert(`New element created: ${newElement}`);
            updateElementsMenu();
        }
        selectedElements.length = 0;
        updateSelectedElementsMenu();
    }
};

// Initial setup
updateElementsMenu();
