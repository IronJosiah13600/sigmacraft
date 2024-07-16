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
document.addEventListener("DOMContentLoaded", function() {
    let elementButtons = document.querySelectorAll(".element");
    elementButtons.forEach(button => {
        button.addEventListener("click", function() {
            let element = button.getAttribute("data-element");
            addToSelected(element); // Add element to selected list
            moveButtonToSelected(button); // Move button to selected tab
        });
    });
});

// Function to move button to selected tab
function moveButtonToSelected(button) {
    let selectedList = document.getElementById("selected-list");
    let clonedButton = button.cloneNode(true); // Clone button
    clonedButton.addEventListener("click", function() {
        removeFromSelected(clonedButton.getAttribute("data-element")); // Remove from selected when clicked again
    });
    selectedList.appendChild(clonedButton); // Append cloned button to selected tab
}

// Function to remove element from selected list
function removeFromSelected(element) {
    let index = selectedElements.indexOf(element);
    if (index !== -1) {
        selectedElements.splice(index, 1);
        updateSelectedElements(); // Update UI
    }
}

// Add event listener for combine button
let combineButton = document.getElementById("combine-btn");
combineButton.addEventListener("click", function() {
    combineSelectedElements(); // Combine selected elements
});
