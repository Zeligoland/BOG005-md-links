const fs = require('fs');
const argsTerminal = process.argv
const path = require('path');

const isDirectory = (param) => {
    let stats = fs.statSync(param)
    console.log('¿Es un directorio?', stats.isDirectory())
    return stats.isDirectory();
};
//Función para revisar los documentos dentro de un archivo
const dirFiles = (param) => {
    const dirFilesArray = fs.readdirSync(param);
    console.log('Contenido del directorio', dirFilesArray);
    return dirFilesArray
}
//muestra los archivos md dentro del directorio
const mdFiles = (param) => {
    const mdExtensionFiles = path.extname(param) === '.md';
    console.log('¿Es archivo .md?', mdExtensionFiles);
   return mdExtensionFiles;
};

// función con recursividad para recorrer las carpetas y archivos consiguiendo los .md
const getMdFiles = (param) => {
    let allMdFiles = [];
    console.log('Ruta :', param);
        if (!isDirectory(param)) {
            if(mdFiles(param)) {
                allMdFiles.push(param);
            }
        } else {
            //leer de forma asincrónica el contenido de un directorio
            const readDirectorFiles = fs.readdirSync(param);
            let absolutePath = readDirectorFiles.map((fileName) => path.join(param, fileName));
            
            absolutePath.forEach((fileNamePath) => {
                allMdFiles = allMdFiles.concat(getMdFiles(fileNamePath))                
            });

        }       
        
        console.log(allMdFiles);
    
    return allMdFiles;
    // la función retorna un array con todos los archivos .md
};


isDirectory(argsTerminal[2]);
dirFiles(argsTerminal[2]);
mdFiles(argsTerminal[2]);
getMdFiles(argsTerminal[2]);


module.exports = {
    isDirectory,
    dirFiles,
    mdFiles,
   getMdFiles,
}