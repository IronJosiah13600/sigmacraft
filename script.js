let discoveredElements = ["earth", "air", "fire", "water"];
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
    // Additional combinations can be added here
};

let selectedElements = [];

function updateSelectedElements() {
    let selectedList = document.getElementById("selected-list");
    selectedList.innerHTML = "";

    selectedElements.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        li.id = `selected-${element}`;
        selectedList.appendChild(li);
    });
}

function addToSelected(element) {
    if (selectedElements.length < 2 && !selectedElements.includes(element)) {
        selectedElements.push(element);
        updateSelectedElements();
    } else {
        console.log("You can only select up to two elements.");
    }
}

function combineSelectedElements() {
    if (selectedElements.length === 2) {
        let element1 = selectedElements[0];
        let element2 = selectedElements[1];

        if (elements[element1] && elements[element1].combinations && elements[element1].combinations[element2]) {
            let newElement = elements[element1].combinations[element2];
            addToDiscovered(newElement);
        } else if (elements[element2] && elements[element2].combinations && elements[element2].combinations[element1]) {
            let newElement = elements[element2].combinations[element1];
            addToDiscovered(newElement);
        } else {
            console.log(`No combination found for ${element1} and ${element2}`);
        }

        selectedElements = [];
        updateSelectedElements();
    } else {
        console.log("Select exactly two elements to combine.");
    }
}

function addToDiscovered(element) {
    if (!discoveredElements.includes(element)) {
        discoveredElements.push(element);
        updateElementsMenu();
        alert(`New element created: ${element}`);
    }
}

function updateElementsMenu() {
    let elementsMenu = document.getElementById("elements-menu");
    elementsMenu.innerHTML = "";

    discoveredElements.forEach(element => {
        let button = document.createElement("button");
        button.textContent = element;
        button.classList.add("element");
        button.setAttribute("data-element", element);
        elementsMenu.appendChild(button);
    });

    addElementButtonListeners();
}

function addElementButtonListeners() {
    let elementButtons = document.querySelectorAll(".element");
    elementButtons.forEach(button => {
        button.addEventListener("click", function() {
            let element = button.getAttribute("data-element");
            addToSelected(element);
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    updateElementsMenu();
});

let combineButton = document.getElementById("combine-btn");
combineButton.addEventListener("click", function() {
    combineSelectedElements();
});
//