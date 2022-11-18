const { readAllFilesMds, validateLinks } = require('./read-file.js');
const { isPathAbsolute } = require("./path-process.js");
const { getMdFiles } = require("./navigate-directory.js");

const rutaTerminal = process.argv[2]

const mdLinks = (path, options={validate:true}) => {
    return new Promise((resolve, reject) =>{
        const absolutePaht = isPathAbsolute(path)
        const arrayMds = getMdFiles(absolutePaht)
        if(options.validate===true) {
            readAllFilesMds(arrayMds)
            .then(response=> validateLinks(response))
            .then(resp => resolve(resp))
        } else {
            readAllFilesMds(arrayMds)
            .then(response=> resolve(response))
        }
    })
}
mdLinks(rutaTerminal).then(res=>console.log('Here is the result of your validation request', res))