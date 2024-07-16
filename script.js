// Define initial discovered elements (starting with earth, air, fire, water)
let discoveredElements = ["earth", "air", "fire", "water"];

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
            "air": "wind"
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
            "fire": "metal"
        }
    },
    "brick": {
        combinations: {
            "water": "wall"
        }
    },
    "wind": {
        combinations: {
            "air": "storm"
        }
    },
    "cloud": {
        combinations: {
            "air": "sky"
        }
    },
    "salt": {
        combinations: {
            "fire": "salt"
        }
    },
    "metal": {
        combinations: {
            "fire": "iron"
        }
    },
    "wall": {
        combinations: {
            "fire": "house"
        }
    },
    "storm": {
        combinations: {
            "air": "thunder"
        }
    },
    "sky": {
        combinations: {
            "air": "bird"
        }
    },
    "iron": {
        combinations: {
            "fire": "steel"
        }
    },
    "house": {
        combinations: {
            "fire": "village"
        }
    },
    "thunder": {
        combinations: {
            "air": "lightning"
        }
    },
    "bird": {
        combinations: {
            "air": "pigeon"
        }
    },
    "steel": {
        combinations: {
            "fire": "sword"
        }
    },
    "village": {
        combinations: {
            "fire": "city"
        }
    },
    "lightning": {
        combinations: {
            "air": "electricity"
        }
    },
    "pigeon": {
        combinations: {
            "air": "dove"
        }
    },
    "sword": {
        combinations: {
            "fire": "forge"
        }
    },
    "city": {
        combinations: {
            "fire": "metropolis"
        }
    },
    "electricity": {
        combinations: {
            "air": "energy"
        }
    },
    "dove": {
        combinations: {
            "air": "peace"
        }
    },
    "forge": {
        combinations: {
            "fire": "hammer"
        }
    },
    "metropolis": {
        combinations: {
            "fire": "skyscraper"
        }
    },
    // ... (all 25 elements and their combinations)
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
    if (selectedElements.length < 2 && !selectedElements.includes(element)) {
        selectedElements.push(element);
        updateSelectedElements();
    } else {
        console.log("You can only select up to two elements.");
        // Display a message or alert to inform the user
    }
}

// Function to combine selected elements and discover new ones
function combineSelectedElements() {
    if (selectedElements.length === 2) {
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
        updateElementsMenu(); // Update elements menu to include discovered elements
    } else {
        console.log("Select exactly two elements to combine.");
        // Display a message or alert to select exactly two elements
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
        updateElementsMenu(); // Update elements menu with newly discovered elements
    }
}

// Function to update the elements menu with all elements (discovered and undiscovered)
function updateElementsMenu() {
    let elementsMenu = document.getElementById("elements-menu");
    elementsMenu.innerHTML = ""; // Clear existing menu

    // Add all elements, including discovered ones
    for (let element in elements) {
        let button = document.createElement("button");
        button.textContent = element;
        button.classList.add("element");
        button.setAttribute("data-element", element);
        if (discoveredElements.includes(element)) {
            elementsMenu.appendChild(button); // Add button only if discovered
        }
    }

    // Add event listeners to newly added buttons
    addElementButtonListeners();
}

// Function to add event listeners to element buttons
function addElementButtonListeners() {
    let elementButtons = document.querySelectorAll(".element");
    elementButtons.forEach(button => {
        button.addEventListener("click", function() {
            let element = button.getAttribute("data-element");
            addToSelected(element); // Add element to selected list
        });
    });
}

// Add event listeners for initial element buttons
document.addEventListener("DOMContentLoaded", function() {
    updateElementsMenu(); // Initial update of elements menu
});

// Add event listener for combine button
let combineButton = document.getElementById("combine-btn");
combineButton.addEventListener("click", function() {
    combineSelectedElements(); // Combine selected elements
});
