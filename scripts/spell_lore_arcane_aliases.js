
Hooks.on("init", () => {
    const config = {}

    config.arcaneNames = {
    "Accelerate": {
        "beasts": "Hunting Acceleration",
        "life": "Vital Acceleration",
        "fire": "Blazing Acceleration",
        "metal": "Quicksilver Acceleration",
        "heavens": "Stellar Acceleration",
        "light": "Flashing Acceleration",
        "shadows": "Hidden Acceleration",
        "death": "Fading Acceleration",
        "hedgecraft": "Hearth Acceleration",
        "witchcraft": "Cursed Acceleration",
        "daemonology": "Warped Acceleration",
        "necromancy": "Grave Acceleration",
        "oungnooe": "Chaotic Acceleration",
        "oeq": "Fevered Acceleration",
        "gwellavra": "Seductive Acceleration"
    },
    "Aethyric Armour": {
        "beasts": "Feral Armour",
        "life": "Thornwoven Armour",
        "fire": "Flameforged Armour",
        "metal": "Golden Armour",
        "heavens": "Celestial Armour",
        "light": "Luminous Armour",
        "shadows": "Umbral Armour",
        "death": "Bone Armour",
        "hedgecraft": "Elderbark Armour",
        "witchcraft": "Coven Armour",
        "daemonology": "Infernal Armour",
        "necromancy": "Necrotic Armour",
        "oungnooe": "Iridescent Armour",
        "oeq": "Plagueforged Armour",
        "gwellavra": "Silken Armour"
    },
    "Aethyric Arms": {
        "beasts": "Predator's Arms",
        "life": "Verdant Arms",
        "fire": "Infernal Arms",
        "metal": "Platinum Arms",
        "heavens": "Thunderous Arms",
        "light": "Gleaming Arms",
        "shadows": "Phantom Arms",
        "death": "Revenant Arms",
        "hedgecraft": "Witch’s Arms",
        "witchcraft": "Bloodbound Arms",
        "daemonology": "Demonic Arms",
        "necromancy": "Bonebound Arms",
        "oungnooe": "Warped Arms",
        "oeq": "Rotting Arms",
        "gwellavra": "Caressing Arms"
    },
    "Alarm": {
        "beasts": "Howl of Warning",
        "life": "Whispering Warning",
        "fire": "Smouldering Warning",
        "metal": "Clanging Warning",
        "heavens": "Ominous Warning",
        "light": "Clear Warning",
        "shadows": "Whispered Warning",
        "death": "Wailing Warning",
        "hedgecraft": "Chiming Warning",
        "witchcraft": "Howling Warning",
        "daemonology": "Shrieking Warning",
        "necromancy": "Wailing Warning",
        "oungnooe": "Maddening Warning",
        "oeq": "Wheezing Warning",
        "gwellavra": "Tempting Warning"
    },
    "Allegiance": {
        "beasts": "Allegiance of the Pack",
        "life": "Verdant Allegiance",
        "fire": "Allegiance of the Flame",
        "metal": "Allegiance of Steel",
        "heavens": "Allegiance of the Stars",
        "light": "Allegiance of Purity",
        "shadows": "Allegiance of the Veil",
        "death": "Allegiance of the Grave",
        "hedgecraft": "Circle of the Grove",
        "witchcraft": "Allegiance of the Unhallowed",
        "daemonology": "Allegiance of the Abyss",
        "necromancy": "Allegiance of the Undead",
        "oungnooe": "Allegiance of the Shifting",
        "oeq": "Allegiance of Decay",
        "gwellavra": "Allegiance of Desire"
    },
    "Arcane Barrier": {
        "beasts": "Wild Barrier",
        "life": "Thicket Barrier",
        "fire": "Pyroclastic Barrier",
        "metal": "Iron Barrier",
        "heavens": "Astral Barrier",
        "light": "Luminous Barrier",
        "shadows": "Shrouded Barrier",
        "death": "Ethereal Barrier",
        "hedgecraft": "Hedge Barrier",
        "witchcraft": "Witch’s Barrier",
        "daemonology": "Hellforged Barrier",
        "necromancy": "Tombstone Barrier",
        "oungnooe": "Prismatic Barrier",
        "oeq": "Pustulent Barrier",
        "gwellavra": "Velvet Barrier"
    },
    "Arrow Shield": {
        "beasts": "Thorn Barricade",
        "life": "Bramble Barricade",
        "fire": "Blazing Barricade",
        "metal": "Reinforced Barricade",
        "heavens": "Comet Barricade",
        "light": "Prismatic Barricade",
        "shadows": "Obscuring Barricade",
        "death": "Bone Barricade",
        "hedgecraft": "Thorned Barricade",
        "witchcraft": "Cursed Barricade",
        "daemonology": "Warp Barricade",
        "necromancy": "Bone Barricade",
        "oungnooe": "Gleaming Barricade",
        "oeq": "Infected Barricade",
        "gwellavra": "Lustrous Barricade"
    },
    "Belligerence of the Bloodmarsh": {
        "beasts": "Savage Marsh",
        "life": "Ancient Marsh",
        "fire": "Ember Marsh",
        "metal": "Mercurial Marsh",
        "heavens": "Nebula Marsh",
        "light": "Glowing Marsh",
        "shadows": "Dusk Marsh",
        "death": "Cursed Marsh",
        "hedgecraft": "Bramble Marsh",
        "witchcraft": "Hexed Marsh",
        "daemonology": "Abyssal Marsh",
        "necromancy": "Blighted Marsh",
        "oungnooe": "Kaleidoscopic Marsh",
        "oeq": "Miasmic Marsh",
        "gwellavra": "Alluring Marsh"
    },
    "Berserk": {
        "beasts": "Primal Fury",
        "life": "Fury of the Wildwood",
        "fire": "Fiery Fury",
        "metal": "Steelborn Fury",
        "heavens": "Stormborn Fury",
        "light": "Blinding Fury",
        "shadows": "Veiled Fury",
        "death": "Wraith’s Fury",
        "hedgecraft": "Wildbrew Fury",
        "witchcraft": "Bloodlust Fury",
        "daemonology": "Rage of the Possessed",
        "necromancy": "Ghoul's Fury",
        "oungnooe": "Unstable Fury",
        "oeq": "Pox-Ridden Fury",
        "gwellavra": "Frenzied Passion"
    },
    "Blast": {
        "beasts": "Crow's Feast",
        "life": "Verdant Burst",
        "fire": "Fireball",
        "metal": "Shrapnel Burst",
        "heavens": "Starburst",
        "light": "Solar Burst",
        "shadows": "Black Hole",
        "death": "Necrotic Burst",
        "hedgecraft": "Pollen Burst",
        "witchcraft": "Malefic Burst",
        "daemonology": "Warpfire Burst",
        "necromancy": "Rotburst",
        "oungnooe": "Prismatic Burst",
        "oeq": "Septic Burst",
        "gwellavra": "Ecstatic Burst"
    },
    "Bolt": {
        "beasts": "Hunting Bolt",
        "life": "Vine Bolt",
        "fire": "Scorching Bolt",
        "metal": "Cannon Bolt",
        "heavens": "Thunderbolt",
        "light": "Shining Bolt",
        "shadows": "Dagger Bolt",
        "death": "Purple Bolt",
        "hedgecraft": "Herbal Bolt",
        "witchcraft": "Venom Bolt",
        "daemonology": "Daemon Bolt",
        "necromancy": "Death Bolt",
        "oungnooe": "Shifting Bolt",
        "oeq": "Pestilent Bolt",
        "gwellavra": "Enthralling Bolt"
    },
    "Breath": {
        "beasts": "Chimera's Breath",
        "life": "Sylvan Breath",
        "fire": "Dragon’s Breath",
        "metal": "Furnace Breath",
        "heavens": "Frost Breath",
        "light": "Dawn's Breath",
        "shadows": "Smoke Breath",
        "death": "Ghastly Breath",
        "hedgecraft": "Misty Breath",
        "witchcraft": "Sable Breath",
        "daemonology": "Sulfurous Breath",
        "necromancy": "Grave Breath",
        "oungnooe": "Ethereal Breath",
        "oeq": "Plague Breath",
        "gwellavra": "Perfumed Breath"
    },
    "Bridge": {
        "beasts": "Predator Path",
        "life": "Overgrown Path",
        "fire": "Cinder Path",
        "metal": "Path of the Anvil",
        "heavens": "Path of the Constellations",
        "light": "Path of the Enlightened",
        "shadows": "Path of Shades",
        "death": "Path of the Departed",
        "hedgecraft": "Winding Path",
        "witchcraft": "Path of the Cursed",
        "daemonology": "Path of the Infernal",
        "necromancy": "Path of the Forgotten",
        "oungnooe": "Path of the Unreal",
        "oeq": "Path of the Diseased",
        "gwellavra": "Path of Temptation"
    },
    "Chain Attack": {
        "beasts": "Fang Lash",
        "life": "Thorn Lash",
        "fire": "Lash of Fire",
        "metal": "Chain Lash",
        "heavens": "Lightning Lash",
        "light": "Beam Lash",
        "shadows": "Lash of Smoke",
        "death": "Lash of Wraiths",
        "hedgecraft": "Vine Lash",
        "witchcraft": "Barbed Lash",
        "daemonology": "Lash of the Damned",
        "necromancy": "Lash of the Grave",
        "oungnooe": "Lash of the Twisted",
        "oeq": "Lash of the Afflicted",
        "gwellavra": "Lash of Indulgence"
    },
    "Collapse Construct": {
        "beasts": "Beast's Ruin",
        "life": "Nature’s Reclamation",
        "fire": "Incinerate Ruin",
        "metal": "Rusting Ruin",
        "heavens": "Collapsing Ruin",
        "light": "Scattered Ruin",
        "shadows": "Vanishing Ruin",
        "death": "Withering Ruin",
        "hedgecraft": "Cracked Ruin",
        "witchcraft": "Shattered Ruin",
        "daemonology": "Ruin of the Unholy",
        "necromancy": "Crumbling Ruin",
        "oungnooe": "Disjointed Ruin",
        "oeq": "Putrid Ruin",
        "gwellavra": "Shattered Euphoria"
    },
    "Converse by Candlelight": {
        "beasts": "Whisper of the Wilds",
        "life": "Whisper of the Leaves",
        "fire": "Whisper of the Pyre",
        "metal": "Whisper of the Forge",
        "heavens": "Whisper of the Cosmos",
        "light": "Whisper of Incense",
        "shadows": "Whisper of the Lost",
        "death": "Whisper of the Dead",
        "hedgecraft": "Whisper of the Hearth",
        "witchcraft": "Whisper of the Forsaken",
        "daemonology": "Whisper of the Abyss",
        "necromancy": "Whisper of the Departed",
        "oungnooe": "Whisper of the Unhinged",
        "oeq": "Whisper of the Infected",
        "gwellavra": "Whisper of the Enchantress"
    },
    "Corrosive Blood": {
        "beasts": "Venomous Blood",
        "life": "Sap Blood",
        "fire": "Molten Blood",
        "metal": "Mercurial Blood",
        "heavens": "Electrified Blood",
        "light": "Purified Blood",
        "shadows": "Poisonous Blood",
        "death": "Enervated Blood",
        "hedgecraft": "Sap Blood",
        "witchcraft": "Blighted Blood",
        "daemonology": "Tainted Blood",
        "necromancy": "Decayed Blood",
        "oungnooe": "Opalescent Blood",
        "oeq": "Toxic Blood",
        "gwellavra": "Sweetened Blood"
    },
    "Dark Vision": {
        "beasts": "Nocturnal Sight",
        "life": "Moonlit Sight",
        "fire": "Smouldering Sight",
        "metal": "Engineer’s Sight",
        "heavens": "Stargazer's Sight",
        "light": "Illuminated Sight",
        "shadows": "Nightstalker’s Sight",
        "death": "Deathseer’s Sight",
        "hedgecraft": "Herbalist’s Sight",
        "witchcraft": "Occultist’s Sight",
        "daemonology": "Hellborn Sight",
        "necromancy": "Hollow Sight",
        "oungnooe": "Gaze of the Insane",
        "oeq": "Blighted Sight",
        "gwellavra": "Languid Sight"
    },
    "Decipher Curse": {
        "beasts": "Scent of the Curse",
        "life": "Sound of the Curse",
        "fire": "Burn Curse",
        "metal": "Research Curse",
        "heavens": "Augur Curse",
        "light": "Enlightened Curse",
        "shadows": "Occultist’s Curse",
        "death": "Mortician’s Curse",
        "hedgecraft": "Witch’s Curse",
        "witchcraft": "Unravel Curse",
        "daemonology": "Unveil Forbidden Curse",
        "necromancy": "Curse of the Damned",
        "oungnooe": "Curse of the Unknowable",
        "oeq": "Curse of Rot",
        "gwellavra": "Curse of Desire"
    },
    "Deft Hands": {
        "beasts": "Predator's Dexterity",
        "life": "Sylvan Dexterity",
        "fire": "EmberDexterity",
        "metal": "Smith's Dexterity",
        "heavens": "Aerodynamic Dexterity",
        "light": "Guiding Dexterity",
        "shadows": "Ghostly Dexterity",
        "death": "Widow’s Dexterity",
        "hedgecraft": "Forager’s Dexterity",
        "witchcraft": "Hexweaver’s Dexterity",
        "daemonology": "Clawed Dexterity",
        "necromancy": "Bony Dexterity",
        "oungnooe": "Erratic Dexterity",
        "oeq": "Leprous Dexterity",
        "gwellavra": "Delicate Dexterity"
    },
    "Dire Touch": {
        "beasts": "Savage Grasp",
        "life": "Withering Grasp",
        "fire": "Branding Grasp",
        "metal": "Corrosive Grasp",
        "heavens": "Electric Touch",
        "light": "Brilliant Grasp",
        "shadows": "Hollow Grasp",
        "death": "Grave Touch",
        "hedgecraft": "Healing Grasp",
        "witchcraft": "Witch’s Grasp",
        "daemonology": "Possessing Grasp",
        "necromancy": "Withering Grasp",
        "oungnooe": "Disorienting Grasp",
        "oeq": "Plaguebearer’s Grasp",
        "gwellavra": "Sensuous Grasp"
    },
    "Dispirit": {
        "beasts": "Doubt of the Prey",
        "life": "Blighted Doubt",
        "fire": "Flickering Doubt",
        "metal": "Leaden Doubt",
        "heavens": "Clouded Doubt",
        "light": "Overwhelming Doubt",
        "shadows": "Shadow of the Doubt",
        "death": "Mournful Doubt",
        "hedgecraft": "Sapping Doubt",
        "witchcraft": "Withering Doubt",
        "daemonology": "Soul-Draining Doubt",
        "necromancy": "Mourner’s Doubt",
        "oungnooe": "Fractured Doubt",
        "oeq": "Festering Doubt",
        "gwellavra": "Crippling Lust"
    },
    "Disrupt Magic": {
        "beasts": "Magic's Bane",
        "life": "Purging Magic",
        "fire": "Extinguish Magic",
        "metal": "Shatter Magic",
        "heavens": "Void Magic",
        "light": "Exorcise Magic",
        "shadows": "Veil Magic",
        "death": "End Magic",
        "hedgecraft": "Warding Magic",
        "witchcraft": "Doomed Magic",
        "daemonology": "Magic Void",
        "necromancy": "Withered Magic",
        "oungnooe": "Warped Magic",
        "oeq": "Corrupted Magic",
        "gwellavra": "Dissipated Magic"
    },
    "Distracting": {
        "beasts": "Infested Disturbance",
        "life": "Whirling Disturbance",
        "fire": "Blazing Disturbance",
        "metal": "Reflective Disturbance",
        "heavens": "Shimmering Disturbance",
        "light": "Glimmering Disturbance",
        "shadows": "Flickering Disturbance",
        "death": "Haunting Disturbance",
        "hedgecraft": "Rustling Disturbance",
        "witchcraft": "Witch’s Cackle",
        "daemonology": "Chaotic Disturbance",
        "necromancy": "Drifting Disturbance",
        "oungnooe": "Glitching Disturbance",
        "oeq": "Bubonic Disturbance",
        "gwellavra": "Siren’s Disturbance"
    },
    "Dome": {
        "beasts": "Savage Dome",
        "life": "Canopy Dome",
        "fire": "Infernal Dome",
        "metal": "Adamant Dome",
        "heavens": "Astral Dome",
        "light": "Luminous Dome",
        "shadows": "Shadowed Dome",
        "death": "Marmor Dome",
        "hedgecraft": "Grove Dome",
        "witchcraft": "Wicked Dome",
        "daemonology": "Void Dome",
        "necromancy": "Sepulchral Dome",
        "oungnooe": "Shimmering Dome",
        "oeq": "Septic Dome",
        "gwellavra": "Opulent Dome"
    },
    "Drop": {
        "beasts": "Eagle's Fall",
        "life": "Gentle Fall",
        "fire": "Cinder Fall",
        "metal": "Iron Fall",
        "heavens": "Skyfall",
        "light": "Gleaming Fall",
        "shadows": "Phantom Fall",
        "death": "Weak Fall",
        "hedgecraft": "Petal Fall",
        "witchcraft": "Crumbling Fall",
        "daemonology": "Falling into the Abyss",
        "necromancy": "Crumbling Fall",
        "oungnooe": "Tumbling Fall",
        "oeq": "Festering Fall",
        "gwellavra": "Melting Fall"
    },
    "Entangle": {
        "beasts": "Hunter's Snare",
        "life": "Root Snare",
        "fire": "Firelash Snare",
        "metal": "Snaring Chains",
        "heavens": "Celestial Snare",
        "light": "Minor Abulla's Snare",
        "shadows": "Twisting Snare",
        "death": "Manacles of Caloe",
        "hedgecraft": "Brambled Snare",
        "witchcraft": "Cursewoven Snare",
        "daemonology": "Infernal Snare",
        "necromancy": "Grave Snare",
        "oungnooe": "Shifting Snare",
        "oeq": "Gangrenous Snare",
        "gwellavra": "Silken Snare"
    },
    "Enthuse": {
        "beasts": "Untamed Spirit",
        "life": "Spring's Spirit",
        "fire": "Kindled Spirit",
        "metal": "Alchemist's Spirit",
        "heavens": "Guiding Spirit",
        "light": "Pure Spirit",
        "shadows": "Elusive Spirit",
        "death": "Fading Spirit",
        "hedgecraft": "Herbal Spirit",
        "witchcraft": "Coven’s Spirit",
        "daemonology": "Fiendish Spirit",
        "necromancy": "Haunting Spirit",
        "oungnooe": "Euphoric Spirit",
        "oeq": "Putrescent Spirit",
        "gwellavra": "Euphoric Spirit"
    },
    "Fearsome": {
        "beasts": "Hunter's Fear",
        "life": "Ancient Fear",
        "fire": "Fiery Fear",
        "metal": "Immovable Fear",
        "heavens": "Foreboding Fear",
        "light": "Blinding Fear",
        "shadows": "Haunting Fear",
        "death": "Deathly Fear",
        "hedgecraft": "Crone’s Fear",
        "witchcraft": "Omen Fear",
        "daemonology": "Abyssal Fear",
        "necromancy": "Tomb Fear",
        "oungnooe": "Surreal Fear",
        "oeq": "Miasmic Fear",
        "gwellavra": "Overwhelming Fear"
    },
    "Feel No Pain": {
        "beasts": "Unyielding Resilience",
        "life": "Regenerative Resilience",
        "fire": "Flameborn Resilience",
        "metal": "Forged Resilience",
        "heavens": "Starborn Resilience",
        "light": "Celestial Resilience",
        "shadows": "Spectral Resilience",
        "death": "Undying Resilience",
        "hedgecraft": "Soothing Resilience",
        "witchcraft": "Bloodbound Resilience",
        "daemonology": "Unholy Resilience",
        "necromancy": "Undying Resilience",
        "oungnooe": "Eldritch Resilience",
        "oeq": "Pestilent Resilience",
        "gwellavra": "Pleasurable Resilience"
    },
    "Flight": {
        "beasts": "Wings of the Hawk",
        "life": "Zephyr's Wings",
        "fire": "Wings of the Phoenix",
        "metal": "Silverlight Wings",
        "heavens": "Wings of the Tempest",
        "light": "Wings of the Horizon",
        "shadows": "Wings of the Phantom",
        "death": "Wings of the Specter",
        "hedgecraft": "Wings of the Owl",
        "witchcraft": "Wings of the Banshee",
        "daemonology": "Wings of the Daemon",
        "necromancy": "Wings of the Wraith",
        "oungnooe": "Wings of the Abstract",
        "oeq": "Wings of Flies",
        "gwellavra": "Wings of Ecstasy"
    },
    "Fly-Infested Rotweed": {
        "beasts": "Swarming Plague",
        "life": "Blighted Plague",
        "fire": "Raging Plague",
        "metal": "Toxic Plague",
        "heavens": "Plagued Assistant",
        "light": "Glowing Plague",
        "shadows": "Swarming Plague",
        "death": "Plague of the Crypt",
        "hedgecraft": "Blighted Plague",
        "witchcraft": "Pestilent Plague",
        "daemonology": "Plague the Unholy Servant",
        "necromancy": "Plague of the Crypt",
        "oungnooe": "Plague of Whispers",
        "oeq": "Plague of Maggots",
        "gwellavra": "Plague of Decadence"
    },
    "Lifebloom Silt": {
        "beasts": "Savage Renewal",
        "life": "Flourishing Renewal",
        "fire": "Renewal of the Molten Core",
        "metal": "Reforged Renewal",
        "heavens": "Ethereal Renewal",
        "light": "Lustrous Renewal",
        "shadows": "Drifting Renewal",
        "death": "Macabre Renewal",
        "hedgecraft": "Druidic Renewal",
        "witchcraft": "Bloodroot Renewal",
        "daemonology": "Corruptive Renewal",
        "necromancy": "Withering Renewal",
        "oungnooe": "Psychedelic Renewal",
        "oeq": "Fungal Renewal",
        "gwellavra": "Rejuvenating Renewal"
    },
    "Magic Shield": {
        "beasts": "Dominant Dispersion",
        "life": "Natural Dispersion",
        "fire": "Aqshy’s Dispersion",
        "metal": "Elemental Dispersion",
        "heavens": "Charged Dispersion",
        "light": "Refracted Dispersion",
        "shadows": "Ethereal Dispersion",
        "death": "Funeral Dispersion",
        "hedgecraft": "Charmed Dispersion",
        "witchcraft": "Cursed Dispersion",
        "daemonology": "Demonic Dispersion",
        "necromancy": "Phantasmal Dispersion",
        "oungnooe": "Veil of Uncertainty",
        "oeq": "Rotting Dispersion",
        "gwellavra": "Gilded Dispersion"
    },
    "Move Object": {
        "beasts": "Predator's Hand",
        "life": "Sprite's Hand",
        "fire": "Searing Hand",
        "metal": "Gauntlet Hand",
        "heavens": "Gravitational Hand",
        "light": "Guiding Hand",
        "shadows": "Phantom Hand",
        "death": "Ghost Hand",
        "hedgecraft": "Willow Hand",
        "witchcraft": "Accursed Hand",
        "daemonology": "Hand of the Nether",
        "necromancy": "Hand of the Dead",
        "oungnooe": "Dancing Hand",
        "oeq": "Diseased Hand",
        "gwellavra": "Soft Caress"
    },
    "Mundane Aura": {
        "beasts": "Hunter's Stillness",
        "life": "Harmony's Stillness",
        "fire": "Ember Stillness",
        "metal": "Resonant Stillness",
        "heavens": "Silent Stillness",
        "light": "Balanced Stillness",
        "shadows": "Veiled Stillness",
        "death": "Hollow Stillness",
        "hedgecraft": "Tranquil Stillness",
        "witchcraft": "Veiled Stillness",
        "daemonology": "Tainted Stillness",
        "necromancy": "Unhallowed Stillness",
        "oungnooe": "Chaotic Stillness",
        "oeq": "Decaying Stillness",
        "gwellavra": "Hypnotic Stillness"
    },
    "Observe": {
        "beasts": "Keen Gaze",
        "life": "Sage's Gaze",
        "fire": "Scorched Gaze",
        "metal": "Analytical Gaze",
        "heavens": "Prophetic Gaze",
        "light": "Omniscient Gaze",
        "shadows": "Shrouded Gaze",
        "death": "Eternal Gaze",
        "hedgecraft": "Seer’s Gaze",
        "witchcraft": "Hexed Gaze",
        "daemonology": "Warp-Touched Gaze",
        "necromancy": "Revenant’s Gaze",
        "oungnooe": "Unblinking Gaze",
        "oeq": "Blighted Vigor",
        "gwellavra": "Alluring Gaze"
    },
    "Panic": {
        "beasts": "Stampeding Panic",
        "life": "Unnatural Panic",
        "fire": "Infernal Panic",
        "metal": "Ringing Panic",
        "heavens": "Freezing Panic",
        "light": "Blind Panic",
        "shadows": "Blinding Panic",
        "death": "Grave Panic",
        "hedgecraft": "Coven’s Panic",
        "witchcraft": "Hexed Panic",
        "daemonology": "Abyssal Panic",
        "necromancy": "Haunting Panic",
        "oungnooe": "Fractured Panic",
        "oeq": "Pestilent Panic",
        "gwellavra": "Euphoric Panic"
    },
    "Paralyse": {
        "beasts": "Prey’s Paralysis",
        "life": "Rootbind Paralysis",
        "fire": "Burning Paralysis",
        "metal": "Iron Grip Paralysis",
        "heavens": "Skybound Paralysis",
        "light": "Absolute Paralysis",
        "shadows": "Sleep Paralysis",
        "death": "Withering Paralysis",
        "hedgecraft": "Druid’s Paralysis",
        "witchcraft": "Cursed Paralysis",
        "daemonology": "Demonic Paralysis",
        "necromancy": "Wraith Paralysis",
        "oungnooe": "Shifting Paralysis",
        "oeq": "Plague Paralysis",
        "gwellavra": "Enthralling Paralysis"
    },
    "Protective Aura": {
        "beasts": "Peaceful Instinct",
        "life": "Grove's Peace",
        "fire": "Pyromancer's Peace",
        "metal": "Peace of Equilibrium",
        "heavens": "Peace of the Oracle",
        "light": "Towering Peace",
        "shadows": "Silent Peace",
        "death": "Reaper’s Peace",
        "hedgecraft": "Circle’s Peace",
        "witchcraft": "Shade’s Peace",
        "daemonology": "Daemon’s Peace",
        "necromancy": "Gravekeeper’s Peace",
        "oungnooe": "Tranquility of the Mad",
        "oeq": "Maggot’s Peace",
        "gwellavra": "Embrace of Peace"
    },
    "Provocation": {
        "beasts": "Alpha's Challenge",
        "life": "Nature's Challenge",
        "fire": "Fiery Challenge",
        "metal": "Boasted Challenge",
        "heavens": "Unforeseen Challenge",
        "light": "Lawful Challenge",
        "shadows": "Sinister Challenge",
        "death": "Grave Challenge",
        "hedgecraft": "Herbal Challenge",
        "witchcraft": "Forbidden Challenge",
        "daemonology": "Infernal Challenge",
        "necromancy": "Macabre Challenge",
        "oungnooe": "Delirious Challenge",
        "oeq": "Virulent Challenge",
        "gwellavra": "Sultry Challenge"
    },
    "Push": {
        "beasts": "Stampede Wave",
        "life": "Surging Wave",
        "fire": "Eruption Wave",
        "metal": "Pressure Wave",
        "heavens": "Weather Wave",
        "light": "Wave of Light",
        "shadows": "Shadow Wave",
        "death": "Soul Wave",
        "hedgecraft": "Gust Wave",
        "witchcraft": "Curse Wave",
        "daemonology": "Wave of Corruption",
        "necromancy": "Soul Wave",
        "oungnooe": "Ripple Wave",
        "oeq": "Bloating Wave",
        "gwellavra": "Wave of Pleasure"
    },
    "Rally": {
        "beasts": "Call of the Pack",
        "life": "Call of the Land",
        "fire": "Call of the Inferno",
        "metal": "Call of the Forge",
        "heavens": "Call of the Firmament",
        "light": "Call of the Rightful",
        "shadows": "Call of the Unseen",
        "death": "Call of the Damned",
        "hedgecraft": "Call of the Hearth",
        "witchcraft": "Call of the Coven",
        "daemonology": "Call of the Profane",
        "necromancy": "Call of the Restless",
        "oungnooe": "Call of the Unstable",
        "oeq": "Call of the Festering",
        "gwellavra": "Call of the Temptress"
    },
    "Repress": {
        "beasts": "Lizard Memory",
        "life": "Ancient Memory",
        "fire": "Burned Memory",
        "metal": "Rusty Memory",
        "heavens": "Faded Memory",
        "light": "Fading Memory",
        "shadows": "Eclipsed Memory",
        "death": "Forgotten Memory",
        "hedgecraft": "Lost Memory",
        "witchcraft": "Banished Memory",
        "daemonology": "Obliterated Memory",
        "necromancy": "Buried Memory",
        "oungnooe": "Lost Memory",
        "oeq": "Blackened Memory",
        "gwellavra": "Faded Memory"
    },
    "Silence": {
        "beasts": "Owl's Sound",
        "life": "Hushed Sound",
        "fire": "Smothered Sound",
        "metal": "Echoing Sound",
        "heavens": "Vacuum Sound",
        "light": "Hushed Sound",
        "shadows": "Muffled Sound",
        "death": "Eerie Sound",
        "hedgecraft": "Hushed Sound",
        "witchcraft": "Witch’s Silence",
        "daemonology": "Voidborn Sound",
        "necromancy": "Eerie Sound",
        "oungnooe": "Dissonant Sound",
        "oeq": "Gurgling Sound",
        "gwellavra": "Sated Sound"
    },
    "Slippery Ground": {
        "beasts": "Worm Pit",
        "life": "Slick Moss",
        "fire": "Molten Slick",
        "metal": "Oiled Floor",
        "heavens": "Glacial Patch",
        "light": "Ethereal Drift",
        "shadows": "Shadow Sludge",
        "death": "Polished Marble",
        "hedgecraft": "Dewy Floor",
        "witchcraft": "Unstable Ground",
        "daemonology": "Warped Mire",
        "necromancy": "Corpse Sludge",
        "oungnooe": "Twisting Surface",
        "oeq": "Bile Slick",
        "gwellavra": "Silken Surface"
    },
    "Smash": {
        "beasts": "Rhino's Impact",
        "life": "Root Impact",
        "fire": "Meteoric Impact",
        "metal": "Wrecking Impact",
        "heavens": "Meteoric Impact",
        "light": "Radiant Impact",
        "shadows": "Silent Impact",
        "death": "Tombstone Impact",
        "hedgecraft": "Earthbound Impact",
        "witchcraft": "Sacrificial Impact",
        "daemonology": "Cataclysmic Impact",
        "necromancy": "Tombstone Impact",
        "oungnooe": "Wavering Impact",
        "oeq": "Gangrenous Impact",
        "gwellavra": "Climaxing Impact"
    },
    "Steal Aura": {
        "beasts": "Steal Instinct",
        "life": "Steal Vitality",
        "fire": "Steal Radiance",
        "metal": "Steal Protection",
        "heavens": "Steal Fortune",
        "light": "Steal Halo",
        "shadows": "Steal Presence",
        "death": "Steal Vital Essence",
        "hedgecraft": "Steal Essence",
        "witchcraft": "Steal Blood",
        "daemonology": "Steal Damnation",
        "necromancy": "Steal Vital Essence",
        "oungnooe": "Steal Hue",
        "oeq": "Steal Vital Rot",
        "gwellavra": "Steal Desire"
    },
    "Subvert Miracle": {
        "beasts": "Miracle Submission",
        "life": "Miracle Dispersion",
        "fire": "Smothered Miracle",
        "metal": "Miracle Transmutation",
        "heavens": "Miracle Eclipse",
        "light": "Miracle Purge",
        "shadows": "Miracle Erasure",
        "death": "Miracle of the Forgotten",
        "hedgecraft": "Miracle Corruption",
        "witchcraft": "Blasphemer’s Mark",
        "daemonology": "Warped Miracle",
        "necromancy": "Fate’s Undoing",
        "oungnooe": "Miracle of the Unforeseen",
        "oeq": "Foul Miracle",
        "gwellavra": "Miracle of Passion"
    },
    "Succour Magical Servant": {
        "beasts": "Heal Primal Servant",
        "life": "Heal Sylvan Servant",
        "fire": "Heal Flameborn Servanz",
        "metal": "Heal Forgemaster's Servant",
        "heavens": "Heal Atromancer's Servant",
        "light": "Heal Guardian Servant",
        "shadows": "Heal Shade Servant",
        "death": "Wraith Servant",
        "hedgecraft": "Spirit Servant",
        "witchcraft": "Darkling Servant",
        "daemonology": "Unholy Servant",
        "necromancy": "Skeletal Servant",
        "oungnooe": "Unbound Servant",
        "oeq": "Plagueborn Servant",
        "gwellavra": "Devoted Servant"
    },
    "Teleport": {
        "beasts": "Pouncing Step",
        "life": "Waystone Step",
        "fire": "Flare Step",
        "metal": "Mercurial Step",
        "heavens": "Starstep",
        "light": "Flash Step",
        "shadows": "Veil Step",
        "death": "Spectral Step",
        "hedgecraft": "Willow Step",
        "witchcraft": "Shadow Step",
        "daemonology": "Rift Step",
        "necromancy": "Wraith Step",
        "oungnooe": "Slipstep",
        "oeq": "Seeping Step",
        "gwellavra": "Gossamer Step"
    },
    "Terrifying": {
        "beasts": "Terrifying Roar",
        "life": "Terror from the Deep",
        "fire": "Infernal Terror",
        "metal": "Overwhelming Terror",
        "heavens": "Cosmic Terror",
        "light": "Perfect Terror",
        "shadows": "Spectral Terror",
        "death": "Dread Reaper",
        "hedgecraft": "Elder’s Terror",
        "witchcraft": "Forsaken Terror",
        "daemonology": "Abyssal Terror",
        "necromancy": "Necrotic Terror",
        "oungnooe": "Mind-Breaking Terror",
        "oeq": "Rotting Terror",
        "gwellavra": "Lustful Terror"
    },
    "Tongues": {
        "beasts": "Tongue of the Species",
        "life": "Druid's Tongue",
        "fire": "Tongues of Fire",
        "metal": "Encoded Tongue",
        "heavens": "Tongue of the Traveller",
        "light": "Tower of Tongues",
        "shadows": "Whispered Tongues",
        "death": "Whispered Tongues of the Lost",
        "hedgecraft": "Whispering Tongues",
        "witchcraft": "Murmuring Tongues",
        "daemonology": "Tongue of the Profane",
        "necromancy": "Tongue of the Departed",
        "oungnooe": "Tongue of Babble",
        "oeq": "Tongue of Filth",
        "gwellavra": "Tongue of the Serpent"
    },
    "Ward": {
        "beasts": "Warden's Protection",
        "life": "Evergreen Protection",
        "fire": "Charred Protection",
        "metal": "Runic Protection",
        "heavens": "Cosmic Protection",
        "light": "Iridescent Ward",
        "shadows": "Cloaked Protection",
        "death": "Death’s Protection",
        "hedgecraft": "Herbal Protection",
        "witchcraft": "Coven’s Protection",
        "daemonology": "Hellish Protection",
        "necromancy": "Macabre Protection",
        "oungnooe": "Protean Protection",
        "oeq": "Virulent Protection",
        "gwellavra": "Sensual Protection"
    },
    "Word of Invulnerability": {
        "beasts": "Primordial Vigor",
        "life": "Cloak of Dain",
        "fire": "Firelord's Vigor",
        "metal": "Unyielding Vigor",
        "heavens": "Astral Vigor",
        "light": "Lightforged Vigor",
        "shadows": "Ebon Vigor",
        "death": "Untouchable Vigor",
        "hedgecraft": "Warded Vigor",
        "witchcraft": "Unholy Vigor",
        "daemonology": "Demonic Vigor",
        "necromancy": "Undying Vigor",
        "oungnooe": "Everchanging Vigor",
        "oeq": "Blighted Vigor",
        "gwellavra": "Unyielding Pleasure"
    }
};


    foundry.utils.mergeObject(game.wfrp4e.config, config);
});
