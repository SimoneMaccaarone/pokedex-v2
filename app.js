console.log('ciao')

let actualPageIndex;
getNextPage();


// ----- DISPLAY POKEMON ----
function displayPokemons(pokemons) {
    const pokemonContainer = document.getElementById('pokemon-container');
    pokemonContainer.innerHTML = '';

    for (const pokemon of pokemons) {
        pokemonContainer.innerHTML += `<details>
        <summary>
            <span>${pokemon.id}</span>
            <img class="list-img"
                src="${pokemon.sprites.front_default}" alt=" image of ${pokemon.name}">
            <span>${pokemon.name}</span>

            <div class="spacer"></div>
                ${pokemon.types.map(obj => `<span class= "type">${obj.type.name}</span>`).join('|')}
        </summary>
        <div>
            <ul>
            ${createAbilitiesList(pokemon)}
            </ul>
        </div>
    </details>`

    }
}
// FOR per creare una lista delle abilita
function createAbilitiesList(pokemon) {
    let abilitiesHTML = '';
    for (const object of pokemon.abilities) {
        abilitiesHTML += `<li>${object.ability.name}</li>`
    }
    return abilitiesHTML;
}

// ----- Prev & Next ----
function getPreviousPage() {
    actualPageIndex--;
    PokeService.getPage(actualPageIndex).then(pokemons => {
        displayPokemons(pokemons);
    })
}
function getNextPage() {
    if (actualPageIndex === undefined) { // Rilascia pag 0 (pag iniziale)
        actualPageIndex = 0;
    } else {
        actualPageIndex++; // Vai alla prossima pagina
    }
    PokeService.getPage(actualPageIndex).then(pokemons => {
        displayPokemons(pokemons);
    })
}