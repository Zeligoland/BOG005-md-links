const {getMdFiles } = require('../src/navigate-directory');

describe ('getMdFiles function', () => {

    it ('Should be a function', () => {
        expect(typeof getMdFiles).toBe('function');
    })

    it ('Should return all mdFiles from mock directory', () => {
        const secondTestRoute = 'C:/Users/andre/BOG005-md-links/__mocks__/mock-directory';
        const getMdFilesFunction = getMdFiles(secondTestRoute);
        const expectedResult = [
            'C:\\Users\\andre\\BOG005-md-links\\__mocks__\\mock-directory\\mock-md-file-2.md',
            'C:\\Users\\andre\\BOG005-md-links\\__mocks__\\mock-directory\\mock-md-file.md'
          ];

          expect(getMdFilesFunction).toStrictEqual(expectedResult);

    })

})

