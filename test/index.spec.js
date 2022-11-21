const { mdLinks } = require('../src/index.js');
const { valFalse, valTrue } = require('./mdLinks-expected-results.js');

describe('mdLinks', () => {
    it ('Receives a directory and looks for links correctly - Receives Validate False',  () => {
        
        const mockRoute = 'C:\\Users\\andre\\BOG005-md-links\\__mocks__\\mock-directory';
         return mdLinks(mockRoute).then((validationResult) => {
            expect(validationResult).toStrictEqual(valFalse);
        });
    })

    it ('Handles validate true returning an array of objects with status & ok', () => {
        
        const mockRoute = 'C:\\Users\\andre\\BOG005-md-links\\__mocks__\\mock-directory';
        return mdLinks(mockRoute, options={validate:true}).then((validationResult) => {
            expect(validationResult).toStrictEqual(valTrue);
        })


    })
})


        

        //expect(validationResult).toEqual(*an array)*;
        // expect(fetch).toHaveBeenCalledTimes(1);
        // Testing the catch partof func

        // mock the promise being rejected
        // it ('Handles validate false without status and ok', async () => {
            // Expect function.toEqual(...)
            // expect(fetch).toHaveBeenCalledWith('param')
    //     } )
         
