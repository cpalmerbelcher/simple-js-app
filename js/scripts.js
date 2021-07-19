let pokedex = (function () {

let pokemonList = [
  {
    name: "blubasaur",
    height: "7",
    type: ['grass', 'poison'],
  },
  {
    name: "charmander",
    height: "6",
    type: ['fire', 'blaze'],
  },
  {
    name: "squirtle",
    height: "5",
    type: ['water', 'swiming'],
  },
  {
    name: "spearow",
    height: "3",
    type: ['air', 'flying'],
  },
];

for (let i = 0; i < pokedex.length; i++){
	if (pokemonList[i].height > 5) {
		document.write(`<p> ${pokedex[i].name} (height: ${pokedex[i].height}") - Wow, that's big! </p>`);
	} else {
		document.write(`<p> ${pokedex[i].name} (height: ${pokedex[i].height}")</p>`);
}

};
