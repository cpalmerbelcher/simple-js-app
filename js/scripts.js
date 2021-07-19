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
]
for (let i = 0; i < pokemonList.length; i++){
  	console.log (pokemonList[i].height > 5);
    document.write('<p> pokemonList:height </p>')


}
