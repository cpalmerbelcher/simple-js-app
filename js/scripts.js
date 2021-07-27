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
pokemonRepository.add({ name: 'charmander', height: '6', type: 'fire' });
pokemonRepository.add({ name: 'squirtle', height: '5', type: 'water' });
pokemonRepository.add({ name: 'spearow', height: '3', type: 'air' });
console.log(pokemonRepository.getAll());

  pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + " " + "height : " + pokemon.height + "," + " " + pokemon.type + "</br>");
});
