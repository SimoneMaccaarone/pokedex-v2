let actualPageIndex;
getNextPage();


// ----- DISPLAY POKEMON ----
function displayPokemons(pokemons) {
    const pokemonContainer = document.getElementById('pokemon-container');
    pokemonContainer.innerHTML = '';

    for (const pokemon of pokemons) {
        pokemonContainer.innerHTML += `
    <details>
        <summary>
            <span class="id-pokemon">${pokemon.id}</span>
                <img class="list-img"src="${pokemon.sprites.front_default}" alt=" image of ${pokemon.name}">
            <span>${pokemon.name}</span>
                                                <div class="spacer"></div>
            <div class="class-type">${pokemon.types.map(obj => `<span class= "type">${obj.type.name}</span>`).join('|')}</div>
        </summary>
        <hr>


    <div class="basso-container">

        <div class="stats-class">
            <ul>
            <h3>Stats</h3>
            ${createStatsList(pokemon)}
        
        </div>
        
    <div class="abilities-class">
            <ul>
            <h3>Abilities</h3>
            ${createAbilitiesList(pokemon)}
            </ul>
        </div>
    </div>

    </details>`

    }
    console.log(pokemons)
}

// FOR per creare una lista delle stats
function createStatsList(pokemon) {
    let statsHTML = '';
    for (const object of pokemon.stats) {
        statsHTML += `<li>${object.stat.name}: ${object.base_stat}</li>`
    }
    return statsHTML;
}
function createMiniStats(pokemon){
    
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