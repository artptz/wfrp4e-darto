Hooks.on("ready", () => {
    game.wfrp4e.config.subspecies["human"] = {};
    
    let config = {
        subspecies : {
            human  :{}
        }
        
    }
    
    config.subspecies.human["human-aulic"] = {
        name : "Aulic",
        skills : [
            "Animal Care",
            "Charm",
            "Cool",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Language (Yennu)",
            "Language (Critarctic)",
            "Leadership",
            "Lore (Local)",
            "Melee (Basic)",
            "Ranged (Bow)"
        ],
        talents : [
            "Suave, Savvy",
            4
        ]
    }
    
    config.subspecies.human["human-horde"] = {
        name : "Horde",
        skills : [
            "Animal Care",
            "Charm Animal",
            "Cool",
            "Endurance",
            "Gossip",
            "Haggle",
            "Intimidate",
            "Lore (Local)",
            "Melee (Basic)",
            "Outdoor Survival",
            "Ranged (Bow)",
            "Ride (Horse)"
        ],
        talents : [
            "Roughrider, Rover",
            "Resistance (Cold)",
            "Warrior Born, Very Resilient",
            2
        ]
    }
    
    config.subspecies.human["human-yennu"] = {
        name : "Yennu",
        skills : [
            "Animal Care",
            "Charm",
            "Cool",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Language (Aulic)",
            "Language (Asul)",
            "Leadership",
            "Lore (Local)",
            "Melee (Basic)",
            "Ranged (Bow)"
        ],
        talents : [
            "Savvy, Suave",
            4
        ]
    }
    
    config.subspecies.human["human-shama"] = {
        name : "Shama-i",
        skills : [
            "Consume Alcohol",
            "Cool",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Language (Aulic)",
            "Lore (Local)",
            "Melee (Basic)",
            "Ranged (Bow)",
            "Sail",
            "Swim",
            "Trade (Any)"
        ],
        talents : [
            "Savvy, Sharp",
            "Fisherman, Resistance (Cold)",
            3
        ]
    }
    
    config.subspecies.human["human-diarchia"] = {
        name : "Diarchic",
        skills : [
            "Charm",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Intuition",
            "Language (Aulic)",
            "Language (Critarctic)",
            "Leadership",
            "Lore (Local)",
            "Melee (Basic)",
            "Ranged (Bow)",
            "Sail"
        ],
        talents : [
            "Savvy, Suave",
            "Argumentative, Seasoned Traveler",
            3
        ]
    }
    
    config.subspecies.human["human-asulian"] = {
        name : "Asulian",
        skills : [
            "Animal Care",
            "Charm",
            "Cool",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Language (Aulic)",
            "Language (Yennu)",
            "Leadership",
            "Lore (Local)",
            "Melee (Basic)",
            "Ranged (Bow)"
        ],
        talents : [
            "Warrior Born, Sharp",
            "Stout-hearted, Tenacious",
            3
        ]
    }
    

mergeObject(game.wfrp4e.config, config)
})
