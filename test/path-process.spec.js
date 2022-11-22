const { isPathAbsolute, isPathExist } = require('../src/path-process.js');

// Test para conversión de ruta relativa en absoluta

describe('Testing isPathExist', () => {

   it ('Should be a function', () => {
        expect(typeof isPathExist).toBe("function");
    })

    it('Should determine the Testing route exists', () => {

        const existingRoute = 'C:/Users/andre/BOG005-md-links/src/testFile';
        const isPathExistFunction = isPathExist(existingRoute);
        const expectedResult = console.log('La ruta existe. Puede continuar');
        
        expect(isPathExistFunction).toBe(expectedResult);

    })

describe('Testing isPathAbsolute', () => {
    it('Should be a function', () => {
        expect(typeof isPathAbsolute).toBe('function');
    })
    it ('Should convert relative route into absolute', () => {

        let relativeRoute = '../__mocks__/mock-directory';
        let absoluteRoute = 'C:\\Users\\andre\\BOG005-md-links\\__mocks__\\mock-directory';
         

        let realResult = isPathAbsolute(relativeRoute);

        expect(realResult).toBe(absoluteRoute);        

    })
})});