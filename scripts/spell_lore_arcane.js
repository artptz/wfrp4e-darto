Hooks.on("createItem", async (item, options, userId) => {
    if (game.user.id !== userId) return; // Ensure only the creating user runs this
    if (item.type !== "spell" || item.system.lore.value !== "") return;
    if (!item.parent || !(item.parent instanceof Actor)) return;

    let excludedLores = ["petty", "nurgle", "slaanesh", "tzeentch", "undivided", "runebound", "greatmaw"];
    let validLores = Object.entries(game.wfrp4e.config.magicLores)
        .filter(([key, _]) => !excludedLores.includes(key.toLowerCase()))
        .reduce((obj, [key, value]) => (obj[key] = value, obj), {});

    let choice = await ItemDialog.create(ItemDialog.objectToArray(validLores, item.img), 1, {title: item.parent.name, text:"Choose Lore"});
    if (!choice.length) return;

    let loreName = choice[0].name.toLowerCase(); // Convert lore name to lowercase
    
    // Retrieve the alternative name from the global config
    let alternativeName = game.wfrp4e.config.arcaneNames[item.name]?.[loreName];
    let updatedName = alternativeName ? `${alternativeName} (${item.name})` : `${item.name} (${loreName})`;

    let loreImgMap = {
        "gwellavra": "slaanesh",
        "oeq": "nurgle",
        "oungnooe": "tzeentch"
    };
    let loreImg = loreImgMap[loreName] || loreName;

    await item.update({
        name: updatedName,
        img: `modules/wfrp4e-core/icons/spells/${loreImg}.png`,
        "system.lore.value": loreName
    });

    let effects = item.effects.contents;
    if (effects) {
        for (let effectItem of effects) {
            await effectItem.update({ img: `modules/wfrp4e-core/icons/spells/${loreImg}.png` });
        }
    }
});
