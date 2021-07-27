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
pokemonRepository.add({ name: 'blubasaur', height: '7', type: 'grass' });
console.log(pokemonRepository.getAll()); // [ { name: 'blubasaur' } ]

  pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + " " + "height : " + pokemon.height + "," + " " + pokemon.type + "</br>");
});

	pokemonRepository.getAll().forEach(function(pokemon){
		pokemonRepository.addListItem(pokemon);
	});
});

pokemonRepository.search();
