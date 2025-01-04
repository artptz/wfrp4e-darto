Hooks.on("init", () => {
  const config = {};

  config.godBlessings = {
      urdur: [
        "Compendium.wfrp4e-core.items.Item.ElmLfnrXliStS9CP", //battle
        "Compendium.wfrp4e-core.items.Item.Cg2Q3TV66cpmheHS", //courage
        "Compendium.wfrp4e-core.items.Item.KSDrXcieyRc37YI7", //might
        "Compendium.wfrp4e-core.items.Item.tEMwdlHM8A40h6HE", //conscience
        "Compendium.wfrp4e-core.items.Item.2WN0muIB2BFd4kBO", //righteousness
        "Compendium.wfrp4e-core.items.Item.0r3moMIHXsBrcOyh" //hardiness
      ],
      ordo: [
        "Compendium.wfrp4e-core.items.Item.ElmLfnrXliStS9CP", //battle
        "Compendium.wfrp4e-core.items.Item.Cg2Q3TV66cpmheHS", //courage
        "Compendium.wfrp4e-core.items.Item.KSDrXcieyRc37YI7", //might
        "Compendium.wfrp4e-core.items.Item.tEMwdlHM8A40h6HE", //conscience
        "Compendium.wfrp4e-core.items.Item.2WN0muIB2BFd4kBO", //righteousness
        "Compendium.wfrp4e-core.items.Item.0r3moMIHXsBrcOyh" //hardiness
      ],
      abotan: [
        "Compendium.wfrp4e-core.items.Item.tEMwdlHM8A40h6HE", //conscience
        "Compendium.wfrp4e-core.items.Item.GvaOlWY8iD5CO1WB", //tenacity
        "Compendium.wfrp4e-core.items.Item.OkKWAfnMiHfxhTnB", //finesse
        "Compendium.wfrp4e-core.items.Item.FRkIz2sR7ZC92W2G", //wisdom
        "Compendium.wfrp4e-core.items.Item.K5DE9cceinUTIrem", //protection
        "Compendium.wfrp4e-core.items.Item.tMocig1z9dHKNiCT" //wit
      ],
      abboth: [
        "Compendium.wfrp4e-core.items.Item.0r3moMIHXsBrcOyh", //hardiness
        "Compendium.wfrp4e-core.items.Item.TKHvOsihelBStO6i", //breath
        "Compendium.wfrp4e-core.items.Item.iIfYOlNrLb0uiV8c", //fortune
        "Compendium.wfrp4e-core.items.Item.C92dpJPRYpkZFsGu", //healing
        "Compendium.wfrp4e-core.items.Item.K5DE9cceinUTIrem", //protection
        "Compendium.wfrp4e-core.items.Item.GvaOlWY8iD5CO1WB" //tenacity
      ],
      hayfa: [
        "Compendium.wfrp4e-core.items.Item.ElmLfnrXliStS9CP", //battle
        "Compendium.wfrp4e-core.items.Item.TKHvOsihelBStO6i", //breath
        "Compendium.wfrp4e-core.items.Item.0r3moMIHXsBrcOyh", //hardiness
        "Compendium.wfrp4e-core.items.Item.KSDrXcieyRc37YI7", //might
        "Compendium.wfrp4e-core.items.Item.eBRjKAF6U0yR0KK8", //savagery
        "Compendium.wfrp4e-core.items.Item.By5dc8Q7ZAGpr177" //hunt
      ],
      khaimarach: [
        "Compendium.wfrp4e-core.items.Item.ElmLfnrXliStS9CP", //battle
        "Compendium.wfrp4e-core.items.Item.TKHvOsihelBStO6i", //breath
        "Compendium.wfrp4e-core.items.Item.Cg2Q3TV66cpmheHS", //courage
        "Compendium.wfrp4e-core.items.Item.0r3moMIHXsBrcOyh", //hardiness
        "Compendium.wfrp4e-core.items.Item.eBRjKAF6U0yR0KK8", //savagery
        "Compendium.wfrp4e-core.items.Item.GvaOlWY8iD5CO1WB" //tenacity
      ],
      uch: [
        "Compendium.wfrp4e-core.items.Item.Jkt465WPdRcejLwl", //recuperation
        "Compendium.wfrp4e-core.items.Item.TKHvOsihelBStO6i", //breath
        "Compendium.wfrp4e-core.items.Item.tEMwdlHM8A40h6HE", //conscience
        "Compendium.wfrp4e-core.items.Item.C92dpJPRYpkZFsGu", //healing
        "Compendium.wfrp4e-core.items.Item.K5DE9cceinUTIrem", //protection
        "Compendium.wfrp4e-core.items.Item.GvaOlWY8iD5CO1WB" //tenacity
      ],
      oeq: [
        "Compendium.wfrp4e-core.items.Item.0r3moMIHXsBrcOyh", //hardiness
        "Compendium.wfrp4e-core.items.Item.TKHvOsihelBStO6i", //breath
        "Compendium.wfrp4e-core.items.Item.iIfYOlNrLb0uiV8c", //fortune
        "Compendium.wfrp4e-core.items.Item.C92dpJPRYpkZFsGu", //healing
        "Compendium.wfrp4e-core.items.Item.K5DE9cceinUTIrem", //protection
        "Compendium.wfrp4e-core.items.Item.GvaOlWY8iD5CO1WB" //tenacity
      ],
      okynoy: [
        "Compendium.wfrp4e-core.items.Item.FElNQGNiPzaOwwKT", //charisma
        "Compendium.wfrp4e-core.items.Item.iIfYOlNrLb0uiV8c", //fortune
        "Compendium.wfrp4e-core.items.Item.K5DE9cceinUTIrem", //protection
        "Compendium.wfrp4e-core.items.Item.FRkIz2sR7ZC92W2G", //wisdom
        "Compendium.wfrp4e-core.items.Item.eBRjKAF6U0yR0KK8", //savagery
        "Compendium.wfrp4e-core.items.Item.tMocig1z9dHKNiCT" //wit
      ],
      ooungnöe: [
        "Compendium.wfrp4e-core.items.Item.tEMwdlHM8A40h6HE", //conscience
        "Compendium.wfrp4e-core.items.Item.iIfYOlNrLb0uiV8c", //fortune
        "Compendium.wfrp4e-core.items.Item.K5DE9cceinUTIrem", //protection
        "Compendium.wfrp4e-core.items.Item.2WN0muIB2BFd4kBO", //righteousness
        "Compendium.wfrp4e-core.items.Item.eBRjKAF6U0yR0KK8", //savagery
        "Compendium.wfrp4e-core.items.Item.GvaOlWY8iD5CO1WB" //tenacity
      ],
      hayfr: [
        "Compendium.wfrp4e-core.items.Item.tEMwdlHM8A40h6HE", //conscience
        "Compendium.wfrp4e-core.items.Item.Cg2Q3TV66cpmheHS", //courage
        "Compendium.wfrp4e-core.items.Item.iIfYOlNrLb0uiV8c", //fortune
        "Compendium.wfrp4e-core.items.Item.FRkIz2sR7ZC92W2G", //wisdom
        "Compendium.wfrp4e-core.items.Item.2WN0muIB2BFd4kBO", //righteousness
        "Compendium.wfrp4e-core.items.Item.tMocig1z9dHKNiCT" //wit
      ],
      hyyfer: [
        "Compendium.wfrp4e-core.items.Item.iIfYOlNrLb0uiV8c", //fortune
        "Compendium.wfrp4e-core.items.Item.eBRjKAF6U0yR0KK8", //savagery
        "Compendium.wfrp4e-core.items.Item.K5DE9cceinUTIrem", //protection
        "Compendium.wfrp4e-core.items.Item.FElNQGNiPzaOwwKT", //charisma
        "Compendium.wfrp4e-core.items.Item.tMocig1z9dHKNiCT", //wit
        "Compendium.wfrp4e-core.items.Item.OkKWAfnMiHfxhTnB" //finesse
      ],guelavar: [
        "Compendium.wfrp4e-core.items.Item.tEMwdlHM8A40h6HE", //conscience
        "Compendium.wfrp4e-core.items.Item.TKHvOsihelBStO6i", //breath
        "Compendium.wfrp4e-core.items.Item.OkKWAfnMiHfxhTnB", //finesse
        "Compendium.wfrp4e-core.items.Item.C92dpJPRYpkZFsGu", //healing
        "Compendium.wfrp4e-core.items.Item.K5DE9cceinUTIrem", //protection
        "Compendium.wfrp4e-core.items.Item.Jkt465WPdRcejLwl" //recuperation
      ],
      gwellavra: [
        "Compendium.wfrp4e-core.items.Item.FElNQGNiPzaOwwKT", //charisma
        "Compendium.wfrp4e-core.items.Item.maUl7MoLvuvTOhM0", //grace
        "Compendium.wfrp4e-core.items.Item.OkKWAfnMiHfxhTnB", //finesse
        "Compendium.wfrp4e-core.items.Item.GvaOlWY8iD5CO1WB", //tenacity
        "Compendium.wfrp4e-core.items.Item.K5DE9cceinUTIrem", //protection
        "Compendium.wfrp4e-core.items.Item.Jkt465WPdRcejLwl" //recuperation
      ],
  }
  
  foundry.utils.mergeObject(game.wfrp4e.config, config);
});
