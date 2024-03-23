Hooks.on("ready", () => {
    game.wfrp4e.config.subspecies["human"] = {};
    
    let config = {
        subspecies : {
            human  :{}
        }
        
    }
    
    config.subspecies.human["aulici-darto"] = {
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

    config.subspecies.human["horde-darto"] = {
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
            "Marksman, Rover",
            "Resistance (Cold)",
            "Stout-hearted, Very Resilient",
            2
        ]
    }
    

mergeObject(game.wfrp4e.config, config)
})
