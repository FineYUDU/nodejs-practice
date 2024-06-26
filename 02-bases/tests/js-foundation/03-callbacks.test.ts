import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks', () => {

    test('getUserById should return an error if user doues not exist', (done) =>{

        const id = 10;
        getUserById( id, (err, user) =>{

            expect( err ).toBe(`User not found with id ${id}`);
            expect( user ).toBeUndefined();

            
            done();

        });
    });
    
    test('getuserById should return John Doe', (done) =>{

        const id = 1;
        
        getUserById( id, (err, user) =>{
    
            expect( err ).toBeDefined;
            expect( user ).toEqual( {
                id: 1,
                name: 'John Doe',
            });
    
            
            done();
    
        });
        
    })
});