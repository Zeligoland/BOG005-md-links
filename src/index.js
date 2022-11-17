const {isPathAbsolute} = require ('./path-process')
const {getMdFiles} = require('./navigate-directory')



const rutaTerminal = process.argv[2];


const mdLinks = (path, options = {validate: false}) => {
  return new Promise((resolve, reject) => {
    const convertRoute = isPathAbsolute(path);
    const mdArrayFiles = getMdFiles(convertRoute);
    //readAllfilesMds(mdArrayFiles)
    // .then(response => resolve(response))

    if(options.validate === true) {
        //readAllfilesMds(mdArrayFiles)
    // .then(response => resolve(response))
    } else {
           //readAllfilesMds(mdArrayFiles)
    // .then(response => validarHttp(response)) El argumento va a ser esa respuesta
    // .then (resp => resolver(response)) // Encadenamiento de promesas.
    // crear función validar http, checar lo de la ruta, la función recursiva.
    }

    
  });
};
mdLinks(rutaTerminal)
.then((rest) => console.log(`respuesta md-links: ${rest}`))
.catch(err => console.log(err));
