Hooks.on("createItem", async (item, options, userId) => {
    if (game.user.id !== userId) return; // if this code runs on any user that did not perform the original change, skip.
    if (item.type !== "spell" || item.system.lore.value !== "") return; // if Item is not a Spell, or lore is not empty, skip.
    if (!item.parent || !(item.parent instanceof Actor)) return; // if Item has no parent, or parent is not an Actor, skip.
       
    let choice = await ItemDialog.create(ItemDialog.objectToArray(game.wfrp4e.config.magicLores, item.img), 1, {title: item.parent.name, text:"Choose Lore"});
    
    if (!choice.length) return; // If no lore was chosen, stop execution

    let loreName = choice[0].name;

    // Special cases for certain lores
    let loreImgMap = {
        "Gwellavra": "slaanesh",
        "Oeq": "nurgle",
        "Oungnooe": "tzeentch"
    };

    let loreImg = loreImgMap[loreName] || loreName.toLowerCase();

    // Update item
    await item.update({
        name: `${item.name} (${loreName})`,
        img: `modules/wfrp4e-core/icons/spells/${loreImg}.png`,
        "system.lore.value": loreName.toLowerCase()
    });

    // Update item effects images
    let effects = item.effects.contents;
    if (effects) {
        for (let effectItem of effects) {
            await effectItem.update({ img: `modules/wfrp4e-core/icons/spells/${loreImg}.png` });
        }
    }
});
