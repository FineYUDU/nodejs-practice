const { http } = require('../plugins');

const getPokemonById = async(id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    const poke = await http.get(url);

    // const resp = await fetch( url );
    // const poke = await resp.json();

    return poke.name;
}

module.exports = getPokemonById;



