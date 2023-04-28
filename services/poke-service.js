class PokeService {


    static PAGE_COUNT = 20; // number page

    static BASE_URL = 'https://pokeapi.co/api/v2/' // URL dell API

    static getPage(index) {
        const url = this.BASE_URL + '/pokemon?limit=' + this.PAGE_COUNT + '&offset' + (this.PAGE_COUNT * index);

        return fetch(url)
            .then(resp => resp.json())
            .then(pokemonPage=> this.getDetails(pokemonPage.results));
    }

    static getDetails(pokemonNames) {
        const requests = [];

        for (const pokemon of pokemonNames ) {
            const name = pokemon.name;
            console.log(name);
        }
        
    }












}