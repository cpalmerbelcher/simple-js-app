let pokemonRepository = (function () {
  let pokemonList = []; // empty array

  function add(pokemon) {
      pokemonList.push(pokemon);
    }

    function getAll() {
      return pokemonList;
    }

    return {
      add: add,
      getAll: getAll
    };
  })();

console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll()); // [ { name: 'Pikachu' } ]

/* let pokemonRepository = function () {
  let pokemonList = [
    {
      name: 'blubasaur',
      height: '7',
      type: ['grass', 'poison'],
    },
    {
      name: 'charmander',
      height: '6',
      type: ['fire', 'blaze'],
    },
    {
      name: 'squirtle',
      height: '5',
      type: ['water', 'swiming'],
    },
    {
      name: 'spearow',
      height: '3',
      type: ['air', 'flying'],
    },
  ];*/

  pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + " " + "height : " + pokemon.height + " " + pokemon.type + "</br>");
});

pokemonRepository.loadList().then(function() {
	pokemonRepository.getAll().forEach(function(pokemon){
		pokemonRepository.addListItem(pokemon);
	});
});

pokemonRepository.search();


   /*for (let i = 0; i < pokemonList.length; i++) {
    if(pokemonList[i].height > 5){
      document.write(`<p> ${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow, that's big! </p>`);
    } else {
      document.write(`<p> ${pokemonList[i].name} (height: ${pokemonList[i].height}) </p>`);
    }*/

    /*}
}

pokedex()*/
