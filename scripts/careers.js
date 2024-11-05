Hooks.on("setup", () => {
    
    game.wfrp4e.config.speciesCareerReplacements = {
        "marnuk": {
            "Hunter": "Uduk Hunter",
            "Mystic": "Oracle",
        },
        "human": {
            "Witch": ["Necromancer","Chaos Mage"],
            "Warrior Priest": "Sacred Hunter of Hayfa",
            "Knight": "Knight of the Rising Dawn"
        },
    }
    
    foundry.utils.mergeObject(game.wfrp4e.config, config);
});
