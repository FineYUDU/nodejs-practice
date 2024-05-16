
const buildMakePerson = ( { getUUID, getAge } ) => {

    return ({ name, birthdate }) => {
    
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate),
        }
    
    }
}


// const obj = { name:'Erick', birthdate:'1989-12-26' };

// const erick = buildPerson(obj)

// console.log(erick);

module.exports = {
    buildMakePerson,
}