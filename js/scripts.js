let pokemonRepository = (function () {
  let pokemonList = []; // empty array

  function add(pokemon) {
      pokemonList.push(pokemon);
    }

    function getAll() {
      return pokemonList;
    }

    function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class")
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener('click', function(event) {
        showDetails(pokemon);
      });
    }

    function showDetails(pokemon) {
      console.log(pokemon.name);
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();

console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({ name: 'blubasaur', height: '7', type: 'grass' });
pokemonRepository.add({ name: 'charmander', height: '6', type: 'fire' });
pokemonRepository.add({ name: 'squirtle', height: '5', type: 'water' });
pokemonRepository.add({ name: 'spearow', height: '3', type: 'air' });

console.log(pokemonRepository.getAll());

  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
