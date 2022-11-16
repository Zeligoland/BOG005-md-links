const path = require('path');
const { isDirectory, getMdFiles } = require('../src/navigate-directory');

describe('isDirectory function', () => {

    it('Should be a function', () => {
        expect(typeof isDirectory).toBe('function');
    })

    it('Should throw true for a directory', () =>{
        const testRoute = path.resolve(__dirname, '../__mocks__/mock-directory');
        console.log(testRoute);
        const isDirectoryFunction = isDirectory(testRoute);
        expect(isDirectoryFunction).toBeTruthy()

    })
})

describe ('getMdFiles function', () => {

    it ('Should be a function', () => {
        expect(typeof getMdFiles).toBe('function');
    })

    it ('Should return all mdFiles from mock directory', () => {
        const secondTestRoute = 'C:/Users/andre/BOG005-md-links/__mocks__';
        const getMdFilesFunction = getMdFiles(secondTestRoute);
        const expectedResult = [
            'C:\\Users\\andre\\BOG005-md-links\\__mocks__\\mock-directory\\mock-md-file-2.md',
            'C:\\Users\\andre\\BOG005-md-links\\__mocks__\\mock-md-file.md'
          ];

          expect(getMdFilesFunction).toStrictEqual(expectedResult);

    })

})

