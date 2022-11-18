// Aqui debo exportar una función (mdLinks).
const { isPathAbsolute, isPathExist } = require('./path');
const { validateLinks, readFileMd } = require('./read-file');
const { getMdFiles } = require('./readDir');
const argsTerminal = process.argv;
// -----Funcion Mdlinks-----//
const mdLinks = (path, option = {validate: false}) => new Promise((resolve, reject) => {  
    //Convertir la ruta a absoluta
      const pathArgAbsolut = isPathAbsolute(path);
    
    //Validar si la ruta existe
      const validatePathRes = isPathExist(pathArgAbsolut);
    //Declarar array vacio para guardar archivo .md desde getMdFiles
    let arrayMdFile = [];
    
    //Condicional, si la ruta es valida obtiene  archivos .md
    if (validatePathRes === false) {
        reject('| ✿ INVALID PATH ✿ |');
    } else if (validatePathRes) {
        const filesMd = getMdFiles(arrayMdFile, pathArgAbsolut); //Funcion recursiva que revisa el directorio
        if (filesMd.length === 0) { //Si el directorio es vacio
          reject('| ✿ EMPTY DIRECTORY ✿ |');
        } else {
            readFileMd(arrayMdFile)
            .then((objectLinks) => {
              if (objectLinks.length === 0) { //Si el documento no tiene links
                reject('|   ✿ EMPTY FILE ✿   |');
              } else {
                if (option.validate === true) {
                    validateLinks(objectLinks).then(response => {
                    resolve(response)
                  })
                } else {
                  resolve(objectLinks);
                }
              }
            })
        }
      }
});
    
    
    module.exports = mdLinks;
    mdLinks(argsTerminal[2]);