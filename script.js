// Define initial discovered elements
let discoveredElements = ["air", "fire", "water", "earth"];

// Define all elements and their combinations
let elements = {
    "earth": {
        combinations: {
            "air": "dust",
            "fire": "lava",
            "water": "mud"
        }
    },
    "air": {
        combinations: {
            "fire": "energy",
            "water": "mist"
        }
    },
    "fire": {
        combinations: {
            "water": "steam"
        }
    },
    "water": {
        combinations: {
            "fire": "steam"
        }
    },
    // Additional elements and combinations
    "dust": {
        combinations: {
            "fire": "ash"
        }
    },
    "lava": {
        combinations: {
            "water": "stone"
        }
    },
    "mud": {
        combinations: {
            "fire": "brick"
        }
    },
    "energy": {
        combinations: {
            "air": "storm"
        }
    },
    "mist": {
        combinations: {
            "air": "cloud"
        }
    },
    "steam": {
        combinations: {
            "air": "cloud",
            "fire": "energy"
        }
    },
    "ash": {
        combinations: {
            "water": "salt"
        }
    },
    "stone": {
        combinations: {
            "air": "sand"
        }
    },
    "brick": {
        combinations: {
            "air": "house"
        }
    },
    "storm": {
        combinations: {
            "water": "rain"
        }
    },
    "cloud": {
        combinations: {
            "air": "sky"
        }
    },
    "salt": {
        combinations: {
            "fire": "saltwater"
        }
    },
    "sand": {
        combinations: {
            "fire": "glass"
        }
    },
    "house": {
        combinations: {
            "fire": "chimney"
        }
    },
    "rain": {
        combinations: {
            "fire": "rainbow"
        }
    },
    "sky": {
        combinations: {
            "earth": "atmosphere"
        }
    },
    "saltwater": {
        combinations: {
            "air": "cloud"
        }
    },
    "glass": {
        combinations: {
            "air": "window"
        }
    },
    "chimney": {
        combinations: {
            "air": "smoke"
        }
    },
    "rainbow": {
        combinations: {
            "earth": "leprechaun"
        }
    },
    "atmosphere": {
        combinations: {
            "fire": "heatwave"
        }
    },
    "window": {
        combinations: {
            "fire": "fireworks"
        }
    },
    "smoke": {
        combinations: {
            "fire": "smoke signals"
        }
    },
    "leprechaun": {
        combinations: {
            "earth": "four leaf clover"
        }
    },
    "heatwave": {
        combinations: {
            "water": "hot tub"
        }
    },
    "fireworks": {
        combinations: {
            "air": "fire"
        }
    },
    "smoke signals": {
        combinations: {
            "air": "bird"
        }
    },
    "four leaf clover": {
        combinations: {
            "fire": "pots of gold"
        }
    },
    "hot tub": {
        combinations: {
            "fire": "sauna"
        }
    },
    "pots of gold": {
        combinations: {
            "fire": "rainbow"
        }
    },
    "sauna": {
        combinations: {
            "air": "pool"
        }
    },
    "bird": {
        combinations: {
            "air": "wing"
        }
    },
    "pool": {
        combinations: {
            "fire": "jacuzzi"
        }
    },
    "wing": {
        combinations: {
            "fire": "flying saucer"
        }
    },
    "jacuzzi": {
        combinations: {
            "air": "bubbles"
        }
    },
    "flying saucer": {
        combinations: {
            "earth": "alien"
        }
    },
    "bubbles": {
        combinations: {
            "fire": "bubblegum"
        }
    },
    "alien": {
        combinations: {
            "air": "area 51"
        }
    },
    "bubblegum": {
        combinations: {
            "air": "gum"
        }
    },
    "area 51": {
        combinations: {
            "earth": "military base"
        }
    },
    "gum": {
        combinations: {
            "fire": "sticky"
        }
    },
    "military base": {
        combinations: {
            "air": "fighter jet"
        }
    },
    "sticky": {
        combinations: {
            "fire": "campfire"
        }
    },
    "fighter jet": {
        combinations: {
            "air": "stealth"
        }
    },
    "campfire": {
        combinations: {
            "air": "ember"
        }
    },
    "stealth": {
        combinations: {
            "earth": "lurker"
        }
    },
    "ember": {
        combinations: {
            "fire": "hot"
        }
    },
    "lurker": {
        combinations: {
            "fire": "hidden"
        }
    },
    "hot": {
        combinations: {
            "water": "teapot"
        }
    },
    "hidden": {
        combinations: {
            "earth": "truffle"
        }
    },
    "teapot": {
        combinations: {
            "fire": "kettle"
        }
    },
    "truffle": {
        combinations: {
            "fire": "delicious"
        }
    },
    "kettle": {
        combinations: {
            "air": "steam whistle"
        }
    },
    "delicious": {
        combinations: {
            "air": "chocolate"
        }
    },
    "steam whistle": {
        combinations: {
            "earth": "factory"
        }
    },
    "chocolate": {
        combinations: {
            "fire": "milk"
        }
    },
    "factory": {
        combinations: {
            "air": "smoke stack"
        }
    },
    "milk": {
        combinations: {
            "fire": "cheese"
        }
    },
    "smoke stack": {
        combinations: {
            "earth": "building"
        }
    },
    "cheese": {
        combinations: {
            "fire": "pizza"
        }
    },
    "building": {
        combinations: {
            "air": "condo"
        }
    },
    "pizza": {
        combinations: {
            "air": "papa john's"
        }
    },
    "condo": {
        combinations: {
            "earth": "house"
        }
    },
    "papa john's": {
        combinations: {
            "fire": "e-compass"
        }
    },
    "house": {
        combinations: {
            "fire": "fireplace"
        }
    },
    "e-compass": {
        combinations: {
            "air": "on"
        }
    }
};

let selectedElements = []; // Array to store selected elements

// Function to update the UI with selected elements
function updateSelectedElements() {
    let selectedList = document.getElementById("selected-list");
    selectedList.innerHTML = ""; // Clear existing list

    selectedElements.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        li.id = `selected-${element}`; // Set element ID
        selectedList.appendChild(li);
    });
}

// Function to add a new element to selected list
function addToSelected(element) {
    if (!selectedElements.includes(element)) {
        selectedElements.push(element);
        updateSelectedElements();
    }
}

// Function to combine selected elements and discover new ones
function combineSelectedElements() {
    if (selectedElements.length >= 2) {
        let element1 = selectedElements[0];
        let element2 = selectedElements[1];

        if (elements[element1] && elements[element1].combinations && elements[element1].combinations[element2]) {
            let newElement = elements[element1].combinations[element2];
            addToDiscovered(newElement); // Add newly discovered element to discovered list
        } else {
            console.log(`No combination found for ${element1} and ${element2}`);
            // Check combinations with discovered elements
            let discoveredCombination = checkDiscoveredCombinations(selectedElements);
            if (discoveredCombination) {
                addToDiscovered(discoveredCombination); // Add discovered combination to discovered list
            } else {
                console.log("No valid combination found.");
                // Display a message or handle the case where no combination exists
            }
        }

        // Clear selected elements after combining
        selectedElements = [];
        updateSelectedElements();
    } else {
        console.log("Select at least two elements to combine.");
        // Display a message or alert to select at least two elements
    }
}

// Function to check combinations with discovered elements
function checkDiscoveredCombinations(selectedElements) {
    for (let element of discoveredElements) {
        if (elements[element] && elements[element].combinations) {
            for (let key in elements[element].combinations) {
                if (selectedElements.includes(key)) {
                    return elements[element].combinations[key];
                }
            }
        }
    }
    return null;
}

// Function to add a newly discovered element to the discovered list
function addToDiscovered(element) {
    if (!discoveredElements.includes(element)) {
        discoveredElements.push(element);
        updateDiscoveredList(); // Update UI with newly discovered element
    }
}

// Function to update the UI with discovered elements
function updateDiscoveredList() {
    let discoveredList = document.getElementById("discovered-list");
    discoveredList.innerHTML = ""; // Clear existing list

    discoveredElements.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        discoveredList.appendChild(li);
    });
}

// Add event listeners for element buttons
let elementButtons = document.querySelectorAll(".element");
elementButtons.forEach(button => {
    button.addEventListener("click", function() {
        let element = button.getAttribute("data-element");
        addToSelected(element); // Add element to selected list
    });
});

// Add event listener for combine button
let combineButton = document.getElementById("combine-btn");
combineButton.addEventListener("click", function() {
    combineSelectedElements(); // Combine selected elements
});
