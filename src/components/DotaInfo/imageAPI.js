const dotaTooltips = new URL("https://dotatooltips.b-cdn.net/");

export default {
  hero: {
    portrait: (name) => new URL(`hero_miniicons/${name}_png.png`, dotaTooltips),
    ability: (name) => new URL(`spellicons/${name}_png.png`, dotaTooltips),
  },
  item: (name) => new URL(`items/${name}_png.png`, dotaTooltips),
};
