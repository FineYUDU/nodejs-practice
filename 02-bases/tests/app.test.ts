// A A A
describe('Test in the App File', ()=> {

    it('Should be 30',() => {

        // 1- Arrange
        const n1 = 10; 
        const n2 = 20; 

        // 2- Act
        const result = n1 + n2;

        // 3- Assert
        expect(result).toBe(30);
        
    });

});