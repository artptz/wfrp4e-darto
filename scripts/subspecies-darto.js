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
            "Ranged (Bow)",
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
            "Stout-hearted, Very Resilient",
            2
        ]
    }
    
    config.subspecies.human["human-yennu"] = {
        name : "Yennu",
        skills : [
            "Animal Care",
            "Charm",
            "Cool",
            "Endurance",
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
    

mergeObject(game.wfrp4e.config, config)
})
