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

for (let i = 0; i < pokemonList.length; i++){
	if (pokemonList[i].height > 50) {
		document.write(`<p> ${pokemonList[i].name} (height: ${pokemonList[i].height}") - I am a tall Pokemon! </p>`);
	} else {
		document.write(`<p> ${pokemonList[i].name} (height: ${pokemonList[i].height}")</p>`);
}

})();
