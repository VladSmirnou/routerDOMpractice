const pokemons = [
    { id: 1, name: 'pockemonName1', nature: 'fire' },
    { id: 2, name: 'pockemonName2', nature: 'fire' },
    { id: 3, name: 'pockemonName3', nature: 'lightning' },
    { id: 4, name: 'pockemonName4', nature: 'earth' },
    { id: 5, name: 'pockemonName5', nature: 'water' },
];

export const pokemonApi = {
    getPokemons() {
        return pokemons;
    },
};
