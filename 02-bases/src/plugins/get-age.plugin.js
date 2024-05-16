const getAgePluging = require('get-age');


const getAge = (birthdate) => {
    // * Sin Ternarios
    // if(!birthdate) return new Error('birthdate is required');
    // return getAgePluging(birthdate); 
    
    // * Con Ternarios
    const result = 
    birthdate 
    ? getAgePluging(birthdate)
    : new Error('birthdate is required')

    return result

}

module.exports = {
    getAge,
}