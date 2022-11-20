const { mdLinks } = require('../src/index.js')
const { valFalse, valTrue } = require('../__mocks__/mdLinks/mdLinks-mock.js')



describe('mdLinks', () => {
    it ('Receives a directory and looks for links correctly', () => {
        
        const mockRoute = 'C:\\Users\\andre\\BOG005-md-links\\__mocks__\\mock-directory'
        const validationResult = mdLinks(mockRoute, options={validate:true});
        expect(validationResult).toBe(valTrue);

        //expect(validationResult).toEqual(*an array)*;
        // expect(fetch).toHaveBeenCalledTimes(1);
        // Testing the catch partof func

        // mock the promise being rejected
        // it ('Handles validate false without status and ok', async () => {
            // Expect function.toEqual(...)
            // expect(fetch).toHaveBeenCalledWith('param')
    //     } )
         
    })


})