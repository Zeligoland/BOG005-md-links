const { isPathAbsolute, isPathExist } = require('../src/path-process');

// Test para conversión de ruta relativa en absoluta

describe('Testing isPathExist', () => {

   it ('Should be a function', () => {
        expect(typeof isPathExist).toBe("function");
    })

    /*it('Should determine the Testing route exists', () => {

        const existingRoute = '../BOG005-md-links/__mocks__/mock-directory';
        console.log(isPathExist(existingRoute));*/      

    })

describe('Testing isPathAbsolute', () => {
    it('Should be a function', () => {
        expect(typeof isPathAbsolute).toBe('function');
    })
})

describe('Testing isPathAbsolute', () => {
    it ('Should convert relative route into absolute', () => {
        let relativeRoute = '../__mocks__/mock-directory';
        let absoluteRoute = 'C:\\Users\\andre\\BOG005-md-links\\__mocks__\\mock-directory';
              

        let realResult = isPathAbsolute(relativeRoute);

        expect(realResult).toBe(absoluteRoute);        

    })
});
