const users = [
    {
        id:1,
        name:'Erick'
    },
    {
        id:2,
        name:'Fine'
    },
];


const getUserById = ( id, callback ) => {
    const user = users.find( user => user.id === id);

    //  * Con ternario
    user 
    ? callback( null, user )
    : callback(`User not found width id: ${id}`)

    //  * Sin ternario
    // if( !user ) return callback(`User not found width id: ${id}`);
    // return callback( null, user );
}


module.exports = {
    getUserById
};





