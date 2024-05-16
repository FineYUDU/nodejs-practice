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


function getUserById( id, callback ) {
    const user = users.find( function(user){
        return user.id === id;
    });

    if( !user ) return callback(`User not found width id: ${id}`);
    
    return callback( null, user );
}


module.exports = {
    getUserById
};





