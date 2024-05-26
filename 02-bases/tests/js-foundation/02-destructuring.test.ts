import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring',() => {

    test('characters should contain Flash, Superman', () => {

        expect( characters ).toContain('Flash');
        expect( characters ).toContain('Superman');
        
    });

    test('1st Flash 2nd Superman', () => {

        const [ superman, flash ] = characters;

        expect( superman ).toBe('Superman');
        expect( flash ).toBe('Flash');
        
    });
});
