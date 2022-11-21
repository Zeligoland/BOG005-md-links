const fs = require("fs");
const path = require("path");

// Función para confirmar si un directorio existe
const isDirectory = (param) => {
  const stats = fs.statSync(param);

  return stats.isDirectory();
};

// Función para revisar los documentos dentro de un archivo
const contentDir = (param) => {
  const contentDirArray = fs.readdirSync(param);

  return contentDirArray;
};

// Muestra los archivos md dentro del directorio
const mdFiles = (param) => {
  const mdExtFiles = path.extname(param) === ".md";

  return mdExtFiles;
};
// Función con recursividad para recorrer las carpetas y archivos consiguiendo los .md
const getMdFiles = (param) => {
  let allMdFiles = [];
  /* console.log('Ruta :', param); */
  if (!isDirectory(param)) {
    allMdFiles.push(param);
  } else {
    // leer de forma asincrónica el contenido de un directorio
    const readDirectorFiles = fs.readdirSync(param);
    let absolutePath = readDirectorFiles.map((fileName) =>
      path.join(param, fileName)
    );
    absolutePath.forEach((fileNamePath) => {
      if (isDirectory(param)) {
        allMdFiles = allMdFiles.concat(getMdFiles(fileNamePath));
      } else {
        allMdFiles.push(fileNamePath);
      }
    });
  }

  return allMdFiles.filter((elem) => mdFiles(elem));
  // la función retorna un array con todos los archivos .md
};

module.exports = {
  getMdFiles,
};
