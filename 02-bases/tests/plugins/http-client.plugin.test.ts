import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('plugins/http-client.plugin',()=>{
    
    test('httpClientPlugin.get() should return a string',async () =>{
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');

        expect({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed:expect.any(Boolean)
        });
        
    });
    
    test('httpClientPlugin.get()',async ()=>{

        console.log( typeof httpClientPlugin.get );

        expect( typeof httpClientPlugin.get ).toBe('function');
        expect( typeof httpClientPlugin.post ).toBe('function');
        expect( typeof httpClientPlugin.delete ).toBe('function');
        expect( typeof httpClientPlugin.put ).toBe('function');

    });
    
})

