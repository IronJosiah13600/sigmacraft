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
    // Additional elements and combinations
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
            "fire": "wall"
        }
    },
    "storm": {
        combinations: {
            "air": "storm"
        }
    },
    "sky": {
        combinations: {
            "air": "sky"
        }
    },
    "iron": {
        combinations: {
            "fire": "iron"
        }
    },
    "house": {
        combinations: {
            "fire": "house"
        }
    },
    "thunder": {
        combinations: {
            "air": "thunder"
        }
    },
    "bird": {
        combinations: {
            "air": "bird"
        }
    },
    "steel": {
        combinations: {
            "fire": "steel"
        }
    },
    "village": {
        combinations: {
            "fire": "village"
        }
    },
    "lightning": {
        combinations: {
            "air": "lightning"
        }
    },
    "pigeon": {
        combinations: {
            "air": "pigeon"
        }
    },
    "sword": {
        combinations: {
            "fire": "sword"
        }
    },
    "city": {
        combinations: {
            "fire": "city"
        }
    },
    "electricity": {
        combinations: {
            "air": "electricity"
        }
    },
    "dove": {
        combinations: {
            "air": "dove"
        }
    },
    "forge": {
        combinations: {
            "fire": "forge"
        }
    },
    "metropolis": {
        combinations: {
            "fire": "metropolis"
        }
    },
    // New elements and combinations
    "cloud": {
        combinations: {
            "air": "cloud"
        }
    },
    "ocean": {
        combinations: {
            "water": "ocean"
        }
    },
    "night": {
        combinations: {
            "sky": "night"
        }
    },
    "day": {
        combinations: {
            "sky": "day"
        }
    },
    "time": {
        combinations: {
            "day": "daytime",
            "night": "nighttime"
        }
    },
    "daytime": {
        combinations: {
            "sun": "sunlight"
        }
    },
    "nighttime": {
        combinations: {
            "moon": "moonlight"
        }
    },
    "sun": {
        combinations: {
            "sky": "sun"
        }
    },
    "moon": {
        combinations: {
            "sky": "moon"
        }
    },
    "sunlight": {
        combinations: {
            "sun": "light"
        }
    },
    "moonlight": {
        combinations: {
            "moon": "light"
        }
    },
    "light": {
        combinations: {
            "energy": "light"
        }
    },
    "life": {
        combinations: {
            "energy": "life"
        }
    },
    "sea": {
        combinations: {
            "ocean": "sea"
        }
    },
    "sand": {
        combinations: {
            "earth": "sand"
        }
    },
    "swamp": {
        combinations: {
            "earth": "swamp"
        }
    },
    "glass": {
        combinations: {
            "fire": "glass"
        }
    },
    "paper": {
        combinations: {
            "wood": "paper"
        }
    },
    "wood": {
        combinations: {
            "earth": "wood"
        }
    },
    "tree": {
        combinations: {
            "earth": "tree"
        }
    },
    "fruit": {
        combinations: {
            "tree": "fruit"
        }
    },
    "vegetable": {
        combinations: {
            "earth": "vegetable"
        }
    },
    "flower": {
        combinations: {
            "earth": "flower"
        }
    },
    "rose": {
        combinations: {
            "flower": "rose"
        }
    },
    "chocolate": {
        combinations: {
            "milk": "chocolate"
        }
    },
    "milk": {
        combinations: {
            "animal": "milk"
        }
    },
    "sugar": {
        combinations: {
            "earth": "sugar"
        }
    },
    "alcohol": {
        combinations: {
            "yeast": "alcohol"
        }
    },
    "bread": {
        combinations: {
            "dough": "bread"
        }
    },
    "dough": {
        combinations: {
            "flour": "dough"
        }
    },
    "flour": {
        combinations: {
            "wheat": "flour"
        }
    },
    "wheat": {
        combinations: {
            "grass": "wheat"
        }
    },
    "grass": {
        combinations: {
            "earth": "grass"
        }
    },
    "animal": {
        combinations: {
            "life": "animal"
        }
    },
    "meat": {
        combinations: {
            "animal": "meat"
        }
    },
    "fish": {
        combinations: {
            "ocean": "fish"
        }
    },
    "cheese": {
        combinations: {
            "milk": "cheese"
        }
    },
    "smoke": {
        combinations: {
            "fire": "smoke"
        }
    },
    "ash": {
        combinations: {
            "fire": "ash"
        }
    },
    "tobacco": {
        combinations: {
            "grass": "tobacco"
        }
    },
    "vapor": {
        combinations: {
            "water": "vapor"
        }
    },
    "sickness": {
        combinations: {
            "life": "sickness"
        }
    },
    "energy": {
        combinations: {
            "fire": "energy"
        }
    },
    "plant": {
        combinations: {
            "earth": "plant"
        }
    },
    "tree": {
        combinations: {
            "plant": "tree"
        }
    },
    "flower": {
        combinations: {
            "plant": "flower"
        }
    },
    "fruit": {
        combinations: {
            "tree": "fruit"
        }
    },
    "vegetable": {
        combinations: {
            "earth": "vegetable"
        }
    },
    "coffee": {
        combinations: {
            "energy": "coffee"
        }
    },
    "tea": {
        combinations: {
            "energy": "tea"
        }
    },
    "mushroom": {
        combinations: {
            "earth": "mushroom"
        }
    },
    "life": {
        combinations: {
            "energy": "life"
        }
    },
    "alcoholic": {
        combinations: {
            "life": "alcoholic"
        }
    },
    "bacteria": {
        combinations: {
            "life": "bacteria"
        }
    },
    "blood": {
        combinations: {
            "life": "blood"
        }
    },
    "death": {
        combinations: {
            "life": "death"
        }
    },
    "cereal": {
        combinations: {
            "flour": "cereal"
        }
    },
    "moss": {
        combinations: {
            "swamp": "moss"
        }
    },
    "seaweed": {
        combinations: {
            "ocean": "seaweed"
        }
    },
    "waterlily": {
        combinations: {
            "water": "waterlily"
        }
    },
    "desert": {
        combinations: {
            "sand": "desert"
        }
    },
    "beach": {
        combinations: {
            "sand": "beach"
        }
    },
    "oasis": {
        combinations: {
            "desert": "oasis"
        }
    },
    "swamp": {
        combinations: {
            "plant": "swamp"
        }
    },
    "hurricane": {
        combinations: {
            "storm": "hurricane"
        }
    },
    "tornado": {
        combinations: {
            "storm": "tornado"
        }
    },
    "volcano": {
        combinations: {
            "lava": "volcano"
        }
    },
    "earthquake": {
        combinations: {
            "earth": "earthquake"
        }
    },
    "tsunami": {
        combinations: {
            "ocean": "tsunami"
        }
    },
    "clay": {
        combinations: {
            "sand": "clay"
        }
    },
    "ceramics": {
        combinations: {
            "clay": "ceramics"
        }
    },
    "clock": {
        combinations: {
            "time": "clock"
        }
    },
    "sundial": {
        combinations: {
            "time": "sundial"
        }
    },
    "hourglass": {
        combinations: {
            "time": "hourglass"
        }
    },
    "gunpowder": {
        combinations: {
            "fire": "gunpowder"
        }
    },
    "explosion": {
        combinations: {
            "gunpowder": "explosion"
        }
    },
    "rocket": {
        combinations: {
            "explosion": "rocket"
        }
    },
    "fireworks": {
        combinations: {
            "explosion": "fireworks"
        }
    },
    "skeleton": {
        combinations: {
            "bone": "skeleton"
        }
    },
    "zombie": {
        combinations: {
            "life": "zombie"
        }
    },
    "ghost": {
        combinations: {
            "life": "ghost"
        }
    },
    "vampire": {
        combinations: {
            "life": "vampire"
        }
    },
    "werewolf": {
        combinations: {
            "life": "werewolf"
        }
    },
    "frankenstein": {
        combinations: {
            "life": "frankenstein"
        }
    },
    "robot": {
        combinations: {
            "metal": "robot"
        }
    },
    "computer": {
        combinations: {
            "energy": "computer"
        }
    },
    "internet": {
        combinations: {
            "computer": "internet"
        }
    },
    "smartphone": {
        combinations: {
            "computer": "smartphone"
        }
    },
    "cyborg": {
        combinations: {
            "robot": "cyborg"
        }
    },
    "spaceship": {
        combinations: {
            "rocket": "spaceship"
        }
    },
    "alien": {
        combinations: {
            "life": "alien"
        }
    },
    "astronaut": {
        combinations: {
            "human": "astronaut"
        }
    },
    "planet": {
        combinations: {
            "earth": "planet"
        }
    },
    "galaxy": {
        combinations: {
            "planet": "galaxy"
        }
    },
    "universe": {
        combinations: {
            "galaxy": "universe"
        }
    },
    "time_machine": {
        combinations: {
            "time": "time_machine"
        }
    },
    "wizard": {
        combinations: {
            "human": "wizard"
        }
    },
    "dragon": {
        combinations: {
            "life": "dragon"
        }
    },
    "phoenix": {
        combinations: {
            "fire": "phoenix"
        }
    },
    "unicorn": {
        combinations: {
            "life": "unicorn"
        }
    },
    "mermaid": {
        combinations: {
            "ocean": "mermaid"
        }
    },
    "fairy": {
        combinations: {
            "life": "fairy"
        }
    },
    "centaur": {
        combinations: {
            "human": "centaur"
        }
    },
    "pegasus": {
        combinations: {
            "horse": "pegasus"
        }
    },
    "wizard": {
        combinations: {
            "human": "wizard"
        }
    },
    "elf": {
        combinations: {
            "life": "elf"
        }
    },
    "dwarf": {
        combinations: {
            "human": "dwarf"
        }
    },
    "golem": {
        combinations: {
            "life": "golem"
        }
    },
    "virus": {
        combinations: {
            "bacteria": "virus"
        }
    },
    "medicine": {
        combinations: {
            "life": "medicine"
        }
    },
    "hospital": {
        combinations: {
            "house": "hospital"
        }
    },
    "doctor": {
        combinations: {
            "human": "doctor"
        }
    },
    "nurse": {
        combinations: {
            "human": "nurse"
        }
    },
    "pharmacist": {
        combinations: {
            "human": "pharmacist"
        }
    },
    "library": {
        combinations: {
            "house": "library"
        }
    },
    "book": {
        combinations: {
            "paper": "book"
        }
    },
    "author": {
        combinations: {
            "human": "author"
        }
    },
    "poet": {
        combinations: {
            "human": "poet"
        }
    },
    "painter": {
        combinations: {
            "human": "painter"
        }
    },
    "musician": {
        combinations: {
            "human": "musician"
        }
    },
    "scientist": {
        combinations: {
            "human": "scientist"
        }
    },
    "engineer": {
        combinations: {
            "human": "engineer"
        }
    },
    "inventor": {
        combinations: {
            "human": "inventor"
        }
    },
    "entrepreneur": {
        combinations: {
            "human": "entrepreneur"
        }
    },
    "philosopher": {
        combinations: {
            "human": "philosopher"
        }
    },
    "artist": {
        combinations: {
            "human": "artist"
        }
    },
    "leader": {
        combinations: {
            "human": "leader"
        }
    },
    "warrior": {
        combinations: {
            "human": "warrior"
        }
    },
    "knight": {
        combinations: {
            "human": "knight"
        }
    },
    "king": {
        combinations: {
            "human": "king"
        }
    },
    "queen": {
        combinations: {
            "human": "queen"
        }
    },
    "prince": {
        combinations: {
            "human": "prince"
        }
    },
    "princess": {
        combinations: {
            "human": "princess"
        }
    },
    "thief": {
        combinations: {
            "human": "thief"
        }
    },
    "spy": {
        combinations: {
            "human": "spy"
        }
    },
    "detective": {
        combinations: {
            "human": "detective"
        }
    },
    "lawyer": {
        combinations: {
            "human": "lawyer"
        }
    },
    "judge": {
        combinations: {
            "human": "judge"
        }
    },
    "pilot": {
        combinations: {
            "human": "pilot"
        }
    },
    "astronaut": {
        combinations: {
            "human": "astronaut"
        }
    },
    "teacher": {
        combinations: {
            "human": "teacher"
        }
    },
    "professor": {
        combinations: {
            "human": "professor"
        }
    },
    "student": {
        combinations: {
            "human": "student"
        }
    },
    "athlete": {
        combinations: {
            "human": "athlete"
        }
    },
    "doctor": {
        combinations: {
            "human": "doctor"
        }
    },
    "nurse": {
        combinations: {
            "human": "nurse"
        }
    },
    "engineer": {
        combinations: {
            "human": "engineer"
        }
    },
    "programmer": {
        combinations: {
            "human": "programmer"
        }
    },
    "writer": {
        combinations: {
            "human": "writer"
        }
    },
    "poet": {
        combinations: {
            "human": "poet"
        }
    },
    "sculptor": {
        combinations: {
            "human": "sculptor"
        }
    },
    "architect": {
        combinations: {
            "human": "architect"
        }
    },
    "chef": {
        combinations: {
            "human": "chef"
        }
    },
    "bartender": {
        combinations: {
            "human": "bartender"
        }
    },
    "waiter": {
        combinations: {
            "human": "waiter"
        }
    },
    "dancer": {
        combinations: {
            "human": "dancer"
        }
    },
    "actor": {
        combinations: {
            "human": "actor"
        }
    },
    "musician": {
        combinations: {
            "human": "musician"
        }
    },
    "singer": {
        combinations: {
            "human": "singer"
        }
    },
    "astronomer": {
        combinations: {
            "human": "astronomer"
        }
    },
    "biologist": {
        combinations: {
            "human": "biologist"
        }
    },
    "chemist": {
        combinations: {
            "human": "chemist"
        }
    },
    "geologist": {
        combinations: {
            "human": "geologist"
        }
    },
    "physicist": {
        combinations: {
            "human": "physicist"
        }
    },
    "mathematician": {
        combinations: {
            "human": "mathematician"
        }
    },
    "economist": {
        combinations: {
            "human": "economist"
        }
    },
    "historian": {
        combinations: {
            "human": "historian"
        }
    },
    "philosopher": {
        combinations: {
            "human": "philosopher"
        }
    },
    "artist": {
        combinations: {
            "human": "artist"
        }
    },
    "entrepreneur": {
        combinations: {
            "human": "entrepreneur"
        }
    },
    "lawyer": {
        combinations: {
            "human": "lawyer"
        }
    },
    "police_officer": {
        combinations: {
            "human": "police_officer"
        }
    },
    "firefighter": {
        combinations: {
            "human": "firefighter"
        }
    },
    "soldier": {
        combinations: {
            "human": "soldier"
        }
    },
    "captain": {
        combinations: {
            "human": "captain"
        }
    },
    "president": {
        combinations: {
            "human": "president"
        }
    },
    "prime_minister": {
        combinations: {
            "human": "prime_minister"
        }
    },
    "king": {
        combinations: {
            "human": "king"
        }
    },
    "queen": {
        combinations: {
            "human": "queen"
        }
    },
    "prince": {
        combinations: {
            "human": "prince"
        }
    },
    "princess": {
        combinations: {
            "human": "princess"
        }
    },
    "mayor": {
        combinations: {
            "human": "mayor"
        }
    },
    "governor": {
        combinations: {
            "human": "governor"
        }
    },
    "dictator": {
        combinations: {
            "human": "dictator"
        }
    },
    "emperor": {
        combinations: {
            "human": "emperor"
        }
    },
    "empress": {
        combinations: {
            "human": "empress"
        }
    },
    "queen": {
        combinations: {
            "human": "queen"
        }
    },
    "writer": {
        combinations: {
            "human": "writer"
        }
    },
    "guru": {
        combinations: {
            "human": "guru"
        }
    },
    "teacher": {
        combinations: {
            "human": "teacher"
        }
    },
    "coach": {
        combinations: {
            "human": "coach"
        }
    },
    "instructor": {
        combinations: {
            "human": "instructor"
        }
    },
    "mentor": {
        combinations: {
            "human": "mentor"
        }
    },
    "guide": {
        combinations: {
            "human": "guide"
        }
    },
    "guard": {
        combinations: {
            "human": "guard"
        }
    },
    "caretaker": {
        combinations: {
            "human": "caretaker"
        }
    },
    "keeper": {
        combinations: {
            "human": "keeper"
        }
    },
    "assistant": {
        combinations: {
            "human": "assistant"
        }
    },
    "secretary": {
        combinations: {
            "human": "secretary"
        }
    },
    "receptionist": {
        combinations: {
            "human": "receptionist"
        }
    },
    "servant": {
        combinations: {
            "human": "servant"
        }
    },
    "maid": {
        combinations: {
            "human": "maid"
        }
    },
    "butler": {
        combinations: {
            "human": "butler"
        }
    },
    "cook": {
        combinations: {
            "human": "cook"
        }
    },
    "chef": {
        combinations: {
            "human": "chef"
        }
    },
    "waiter": {
        combinations: {
            "human": "waiter"
        }
    },
    "bartender": {
        combinations: {
            "human": "bartender"
        }
    },
    "barista": {
        combinations: {
            "human": "barista"
        }
    },
    "farmer": {
        combinations: {
            "human": "farmer"
        }
    },
    "gardener": {
        combinations: {
            "human": "gardener"
        }
    },
    "florist": {
        combinations: {
            "human": "florist"
        }
    },
    "builder": {
        combinations: {
            "human": "builder"
        }
    },
    "carpenter": {
        combinations: {
            "human": "carpenter"
        }
    },
    "plumber": {
        combinations: {
            "human": "plumber"
        }
    },
    "electrician": {
        combinations: {
            "human": "electrician"
        }
    },
    "mechanic": {
        combinations: {
            "human": "mechanic"
        }
    },
    "welder": {
        combinations: {
            "human": "welder"
        }
    },
    "driver": {
        combinations: {
            "human": "driver"
        }
    },
    "pilot": {
        combinations: {
            "human": "pilot"
        }
    },
    "sailor": {
        combinations: {
            "human": "sailor"
        }
    },
    "fisherman": {
        combinations: {
            "human": "fisherman"
        }
    },
    "hunter": {
        combinations: {
            "human": "hunter"
        }
    },
    "police_officer": {
        combinations: {
            "human": "police_officer"
        }
    },
    "firefighter": {
        combinations: {
            "human": "firefighter"
        }
    },
    "soldier": {
        combinations: {
            "human": "soldier"
        }
    },
    "captain": {
        combinations: {
            "human": "captain"
        }
    },
    "officer": {
        combinations: {
            "human": "officer"
        }
    },
    "detective": {
        combinations: {
            "human": "detective"
        }
    },
    "judge": {
        combinations: {
            "human": "judge"
        }
    },
    "lawyer": {
        combinations: {
            "human": "lawyer"
        }
    },
    "criminal": {
        combinations: {
            "human": "criminal"
        }
    },
    "thief": {
        combinations: {
            "human": "thief"
        }
    },
    "spy": {
        combinations: {
            "human": "spy"
        }
    },
    "gangster": {
        combinations: {
            "human": "gangster"
        }
    },
    "villain": {
        combinations: {
            "human": "villain"
        }
    },
    "hero": {
        combinations: {
            "human": "hero"
        }
    },
    "knight": {
        combinations: {
            "human": "knight"
        }
    },
    "warrior": {
        combinations: {
            "human": "warrior"
        }
    },
    "samurai": {
        combinations: {
            "human": "samurai"
        }
    },
    "ninja": {
        combinations: {
            "human": "ninja"
        }
    },
    "monk": {
        combinations: {
            "human": "monk"
        }
    },
    "priest": {
        combinations: {
            "human": "priest"
        }
    },
    "bishop": {
        combinations: {
            "human": "bishop"
        }
    },
    "pope": {
        combinations: {
            "human": "pope"
        }
    },
    "angel": {
        combinations: {
            "life": "angel"
        }
    },
    "demon": {
        combinations: {
            "life": "demon"
        }
    },
    "god": {
        combinations: {
            "life": "god"
        }
    },
    "devil": {
        combinations: {
            "life": "devil"
        }
    },
    "hermit": {
        combinations: {
            "human": "hermit"
        }
    },
    "philosopher": {
        combinations: {
            "human": "philosopher"
        }
    },
    "sage": {
        combinations: {
            "human": "sage"
        }
    },
    "guru": {
        combinations: {
            "human": "guru"
        }
    },
    "prophet": {
        combinations: {
            "human": "prophet"
        }
    },
    "mystic": {
        combinations: {
            "human": "mystic"
        }
    },
    "oracle": {
        combinations: {
            "human": "oracle"
        }
    },
    "shaman": {
        combinations: {
            "human": "shaman"
        }
    },
    "witch": {
        combinations: {
            "human": "witch"
        }
    },
    "sorcerer": {
        combinations: {
            "human": "sorcerer"
        }
    },
    "wizard": {
        combinations: {
            "human": "wizard"
        }
    },
    "warlock": {
        combinations: {
            "human": "warlock"
        }
    },
    "cleric": {
        combinations: {
            "human": "cleric"
        }
    },
    "paladin": {
        combinations: {
            "human": "paladin"
        }
    },
    "bard": {
        combinations: {
            "human": "bard"
        }
    },
    "jester": {
        combinations: {
            "human": "jester"
        }
    },
    "trickster": {
        combinations: {
            "human": "trickster"
        }
    },
    "juggler": {
        combinations: {
            "human": "juggler"
        }
    },
    "acrobat": {
        combinations: {
            "human": "acrobat"
        }
    },
    "magician": {
        combinations: {
            "human": "magician"
        }
    },
    "illusionist": {
        combinations: {
            "human": "illusionist"
        }
    },
    "escape_artist": {
        combinations: {
            "human": "escape_artist"
        }
    },
    "mime": {
        combinations: {
            "human": "mime"
        }
    },
    "artist": {
        combinations: {
            "human": "artist"
        }
    },
    "sculptor": {
        combinations: {
            "human": "sculptor"
        }
    },
    "painter": {
        combinations: {
            "human": "painter"
        }
    },
    "writer": {
        combinations: {
            "human": "writer"
        }
    },
    "poet": {
        combinations: {
            "human": "poet"
        }
    },
    "composer": {
        combinations: {
            "human": "composer"
        }
    },
    "conductor": {
        combinations: {
            "human": "conductor"
        }
    },
    "musician": {
        combinations: {
            "human": "musician"
        }
    },
    "singer": {
        combinations: {
            "human": "singer"
        }
    },
    "dancer": {
        combinations: {
            "human": "dancer"
        }
    },
    "actor": {
        combinations: {
            "human": "actor"
        }
    },
    "director": {
        combinations: {
            "human": "director"
        }
    },
    "producer": {
        combinations: {
            "human": "producer"
        }
    },
    "screenwriter": {
        combinations: {
            "human": "screenwriter"
        }
    },
    "cinematographer": {
        combinations: {
            "human": "cinematographer"
        }
    },
    "editor": {
        combinations: {
            "human": "editor"
        }
    },
    "critic": {
        combinations: {
            "human": "critic"
        }
    },
    "journalist": {
        combinations: {
            "human": "journalist"
        }
    },
    "reporter": {
        combinations: {
            "human": "reporter"
        }
    },
    "photographer": {
        combinations: {
            "human": "photographer"
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
        showNewElementMessage(element); // Show new element message
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

// Function to show a new element created message
function showNewElementMessage(element) {
    let message = document.getElementById("new-element-message");
    message.textContent = `New element created: ${element}`;
    message.style.display = "block";
    setTimeout(() => {
        message.style.display = "none";
    }, 3000); // Hide the message after 3 seconds
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
