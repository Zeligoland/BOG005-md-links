const path = require("path");
const fs = require("fs");

const isPathExist = (param) => {
  if (!fs.existsSync(param)) {
    //console.log('La ruta no existe')
  } else {
    //console.log('La ruta existe. Puede continuar')
  }
};

const isPathAbsolute = (param) => {
  if (!path.isAbsolute(param)) {
    const convertRoute = path.resolve(__dirname, param);

    return convertRoute;
  } else {
    return param;
  }
};

module.exports = {
  isPathExist,
  isPathAbsolute,
};
