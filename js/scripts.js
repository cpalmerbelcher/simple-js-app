let pokemonRepository = (function () {
  let pokemonList = []; // empty array
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modal = document.querySelector('.modal');

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
      return pokemonList;
    }

  function addListItem(pokemon) {
     let pokemonList = document.querySelector(".list-group");
     let listpokemon = document.createElement("li");
     let button = document.createElement("button");
     listpokemon.classList.add("group-list-item");
     button.innerText = pokemon.name;
     button.classList.add("btn-success");

     listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

     button.addEventListener('click', function(event) {
       showDetails(pokemon);
    });
 }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);
        // console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    })
    .then(function (details) {
      // Now we add the details to the item
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
    })
    .catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    console.log(pokemon);
    let modalBody = document.querySelector('.modal-body');
    let modalBodyText = document.createElement('p');
    modalBodyText.innerHTML = pokemon.height;
    modalBody.appendChild(modalBodyText);
    modal.appendChild(modalBody);
    // modalContainer.innerHTML = '';
    // let modal = document.createElement('div');
    // modal.classList.add('modal');

    // let closeButtonElement = document.createElement('button');
    // closeButtonElement.classList.add('modal-close');
    // closeButtonElement.innerText = 'Close';
    // closeButtonElement.addEventListener('click', hideModal);

    // let titleElement = document.createElement('h1');
    // titleElement.innerText = pokemon.name;

    // let imageElement = document.createElement('img');
    // imageElement.src = pokemon.imageUrl;

    // let heightElement = document.createElement('p');
    // heightElement.innerText = 'Height: ' + pokemon.height;

    // modal.appendChild(titleElement);
    // modal.appendChild(imageElement);
    // modal.appendChild(heightElement);
    // modal.appendChild(closeButtonElement);
    // // modal.appendChild(weightElement);
    // modalContainer.appendChild(modal);

    // modalContainer.classList.add('is-visible');
  }

  function hideModal() {
  modal.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
      hideModal();
    }
  });
  modal.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modal) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });
