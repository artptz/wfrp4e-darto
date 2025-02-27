Hooks.on("createItem", async (item, options, userId) => {
    if (game.user.id !== userId) return; // Ensure only the creating user runs this
    if (item.type !== "spell" || item.system.lore.value !== "") return;
    if (!item.parent || !(item.parent instanceof Actor)) return;

    // Find all Arcane Magic talents the actor has
    let arcaneTalents = item.parent.items.filter(i => i.type === "talent" && /^Arcane Magic \(.+\)$/i.test(i.name));
    let arcaneLores = arcaneTalents.map(talent => {
        let match = talent.name.match(/^Arcane Magic \((.+)\)$/i);
        return match ? match[1].toLowerCase() : null;
    }).filter(lore => lore); // Remove null values

    let loreName;
    if (arcaneLores.length === 1) {
        // If the actor has only one Arcane Magic talent, use that lore
        loreName = arcaneLores[0];
    } else {
        let validLores;
        if (arcaneLores.length > 1) {
            // If the actor has multiple Arcane Magic talents, ask between those choices
            validLores = arcaneLores.reduce((obj, lore) => {
                obj[lore] = game.wfrp4e.config.magicLores[lore] || lore;
                return obj;
            }, {});
        } else {
            // If the actor has no Arcane Magic talent, allow all lores and notify the user
            ui.notifications.notify("Note: This actor does not have an Arcane Magic talent.");
            let excludedLores = ["petty", "nurgle", "slaanesh", "tzeentch", "undivided", "runebound", "greatmaw"];
            validLores = Object.entries(game.wfrp4e.config.magicLores)
                .filter(([key, _]) => !excludedLores.includes(key.toLowerCase()))
                .reduce((obj, [key, value]) => (obj[key] = value, obj), {});
        }

        let choice = await ItemDialog.create(ItemDialog.objectToArray(validLores, item.img), 1, {title: item.parent.name, text:"Choose Lore"});
        if (!choice.length) return;
        loreName = choice[0].name.toLowerCase();
    }
    
    // Retrieve the alternative name from the global config
    let alternativeName = game.wfrp4e.config.arcaneNames[item.name]?.[loreName];
    let updatedName = alternativeName ? `${alternativeName} (${item.name})` : `${item.name} (${loreName})`;

    let loreImgMap = {
        "gwellavra": "slaanesh",
        "oeq": "nurgle",
        "oungnooe": "tzeentch"
    };
    let loreImg = loreImgMap[loreName] || loreName;
    
    // Update item image only if it is the default arcane spell image
    if (item.img === "modules/wfrp4e-darto/icons/spells/arcane_spell.png") {
        await item.update({
            img: `modules/wfrp4e-core/icons/spells/${loreImg}.png`
        });
    }

    await item.update({
        name: updatedName,
        "system.lore.value": loreName
    });

    let effects = item.effects.contents;
    if (effects) {
        for (let effectItem of effects) {
            if (effectItem.img === "modules/wfrp4e-darto/icons/spells/arcane_spell.png") {
                await effectItem.update({ img: `modules/wfrp4e-core/icons/spells/${loreImg}.png` });
            }
        }
    }
});
