// const getPokemonById = require('./js-foundation/06-promises');

// getPokemonById(1)
//     .then((pokemon) => console.log(pokemon))
//     .catch( (err)=> console.log(err))
//     .finally( ()=> console.log('Finalmente'));

const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js')

logger.log('Hola mundo');
logger.error('Esto es algo malo');
