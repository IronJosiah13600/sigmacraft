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
