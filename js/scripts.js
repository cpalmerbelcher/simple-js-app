let pokemonRepository = (function () {
  let pokemonList = []; // empty array
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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



  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
