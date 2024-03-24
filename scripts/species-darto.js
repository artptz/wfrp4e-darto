Hooks.on("setup", () => {
  const WFRP4E = game.wfrp4e.config
    
    WFRP4E.species = {
        "human":"Human",
        "marnuk":"Marnuk",
        "inuk":"Inuk"
    }
    
    WFRP4E.speciesCharacteristics = {
        "human": {
            "ws": "2d10+20",
            "bs": "2d10+20",
            "s": "2d10+20",
            "t": "2d10+20",
            "i": "2d10+20",
            "ag": "2d10+20",
            "dex": "2d10+20",
            "int": "2d10+20",
            "wp": "2d10+20",
            "fel": "2d10+20"
        },
        "marnuk": {
            "ws": "2d10+20",
            "bs": "2d10+20",
            "s": "2d10+20",
            "t": "2d10+20",
            "i": "2d10+20",
            "ag": "2d10+20",
            "dex": "2d10+20",
            "int": "2d10+20",
            "wp": "2d10+20",
            "fel": "2d10+20"
        },
        "inuk": {
            "ws": "2d10+20",
            "bs": "2d10+20",
            "s": "2d10+30",
            "t": "2d10+30",
            "i": "2d10+20",
            "ag": "2d10+20",
            "dex": "2d10+20",
            "int": "2d10+20",
            "wp": "2d10+30",
            "fel": "2d10+20"
        }
    }

    WFRP4E.speciesSkills = {
        "human": [
            "Animal Care",
            "Charm",
            "Cool",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Language (Bretonnian)",
            "Language (Wastelander)",
            "Leadership",
            "Lore (Reikland)",
            "Melee (Basic)",
            "Ranged (Bow)"
        ],
        "marnuk": [
            "Animal Care",
            "Charm",
            "Cool",
            "Endurance",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Intuition",
            "Lore (Geology)",
            "Lore (Ulvik or Ereva)",
            "Melee (Basic)",
            "Ranged (Throwing)"
        ],
        "inuk": [
            "Animal Care",
            "Charm Animal",
            "Cool",
            "Endurance",
            "Navigation",
            "Gossip",
            "Haggle",
            "Intuition",
            "Track",
            "Outdoor Survival",
            "Melee (Basic)",
            "Ranged (Bow)"
        ]
    }

    WFRP4E.speciesTalents = {
        "human": [
            "Doomed",
            "Savvy, Suave",
            3
        ],
        "marnuk" : [
            "Resistance (Cold)",
            "Savvy,Suave",
            3
        ],
        "inuk" : [
            "Resistance (Cold)",
            "Very Strong",
            "Strider (Snow)",
            2
        ]
    }

    WFRP4E.speciesFate = {
        "human": 2,
        "marnuk": 2,
        "inuk":2
    }

    WFRP4E.speciesRes = {
        "human": 1,
        "mafrnuk": 1,
        "inuk":2
    }

    WFRP4E.speciesExtra = {
        "human": 3,
        "marnuk":3,
        "inuk":2
    }

    WFRP4E.speciesMovement = {
        "human": 4,
        "marnuk":4,
        "inuk":5
    }

    WFRP4E.speciesAge = {
        "human": "15+1d10",
        "marnuk": "2d6 + 15",
        "inuk": "1d20+15"
    }

    WFRP4E.speciesHeight = {
        "human": {
            feet: 4,
            inches: 9,
            die: "2d10"
        },
        "marnuk" :{
            feet : 6,
            inches : 0,
            die : "1d12"
        },
        "inuk" : {
            feet : 7,
            inches : 0,
            die : "1d12"
        }
    }
    
});
