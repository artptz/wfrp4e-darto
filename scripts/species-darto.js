Hooks.on("setup", () => {
  const WFRP4E = game.wfrp4e.config
  WFRP4E.species[“marnuk”] = “Marnuk”

  WFRP4E.speciesCharacteristics["marnuk"] = {
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
  }

  WFRP4E.speciesSkills["marnuk"] = [
    	      "Animal Care",
            "Charm",
            “Cool”,
	          “Endurance”
            “Evaluate”,
            “Gossip”,
            “Haggle”,
	          “Intuition”,
            “Lore” (Geology),
            "Lore (Ulvik)”,
            “Melee (Basic)”,
            "Ranged (Throwing)”
  ]

  WFRP4E.speciesTalents["marnuk"] = [
    “Resistance (Cold)”,
    “Savvy,Suave”,
    3
  ]

  WFRP4E.speciesFate["marnuk"] = 2;

  WFRP4E.speciesRes["marnuk"] = 1;

  WFRP4E.speciesExtra["marnuk"] = 3;

  WFRP4E.speciesMovement["marnuk"] = 4;

  WFRP4E.speciesAge["marnuk"] = "2d10 + 14";

  WFRP4E.speciesHeight["marnuk"] = {
    feet : 6,
    inches : 0,
    die : "1d10"
  }
});