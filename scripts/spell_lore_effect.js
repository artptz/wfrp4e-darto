Hooks.on("init", () => {
  const config = {};

  config.loreEffectDescriptions = {
      "gwellavra": "The Lore of Gwellavra embodies lusty desire in its purer form, so much so that it blurs the thin line between pleasure and pain. Whenever you successfully cast a spell from the Lore of Gwellavra, you may gain the @UUID[Compendium.wfrp4e-core.items.Item.wMwSRDmgiF2IdCJr]{Painless} Creature Trait for the next 1d10 rounds.",
      "oungnooe": "Spells from the Lore of Öungnooe are embued with the transformative magic of Chaos. Targets affected by a Spell from the Lore of Ooungnöe must pass a <b>Challenging (+0) Endurance</b> Test, or gain +1 Corruption Point. Should they pass their Test, they instead gain +1 Fortune Point, which needs to be used within the next 1d10 Rounds. Such are the whims of the Queen of Helpless Minds.",
      "oeq": "The Lore of Oeq infuses the wielder with the essence of rot. Whenever you successfully cast a spell from the Lore of Oeq, you may gain the @UUID[Compendium.wfrp4e-core.items.Item.MVI0lXcg6vvtooAF]{Distracting} Creature Trait for the next 1d10 rounds. Other followers of Oeq are not affected by this Trait.",
      "necromancy": "The art of Necromancy is concerned with subverting the circle of life and death. Whenever you successfully cast a spell from the Lore of Necromancy, you may choose to allocate SL Wounds among any Undead you control within Willpower yards. \n Using a creature’s fresh blood as a Necromancy ingredient provides a +1 SL Bonus to your successful Channelling and Casting Tests. If a creature of Size Small or larger that you are touching (this includes you) is bleeding, you gain a +1 SL Bonus to your Channelling and Casting Tests for every Bleeding Condition suffered (to a maximum of 3). You may spend an Action to cut yourself or a Helpless Target for the desired number of Bleeding Conditions.",
  };
    
   config.magicLores = {
      "gwellavra": "Gwellavra",
      "oungnooe": "Oungnooe",
      "oeq": "Oeq",
   };
    
    config.magicWinds = {
       "gwellavra": "Dhar",
       "oungnooe": "Dhar",
       "oeq": "Dhar",
    };
  
  foundry.utils.mergeObject(game.wfrp4e.config, config);
});
