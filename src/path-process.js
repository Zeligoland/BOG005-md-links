const path = require('path');
const fs = require('fs');
const argsTerminal = process.argv

const isPathExist = (param) => {
    if (!fs.existsSync(param)){
        //console.log('La ruta no existe')
    }else {
        //console.log('La ruta existe. Puede continuar')
    }
};

const isPathAbsolute = (param) => {
    if (!path.isAbsolute(param)){
        const convertRoute = path.resolve(__dirname, param);
        //console.log('Ahora es absoluta', convertRoute)
              
        return convertRoute
        
    } else {
        //console.log('es absoluta')
        return param
    }
};

isPathExist(argsTerminal[2]);

module.exports = {
   isPathExist,
   isPathAbsolute,
};