const fsp = require("fs").promises;
const argsTerminal = process.argv

const readfilePromise = (path) => {
    
  let linksArray = []
  const reg = /\[(.+)\]\((https?:\/\/[^\s]+)(?: "(.+)")?\)|(https?:\/\/[^\s]+)/gi
  return fsp.readFile(path, "utf-8").then((data) => {
    const links = data.match(reg);
    if (links === null) {
      const file = path.split('\\').pop().split('/').pop();
      console.log('No se encontraron enlaces en el archivo ', file)
    } else {
      for (let i in links) {
        const text = reg.exec(links[i]);
        if (text === null || text === undefined) {
          continue
        } else {
          const filteredLinks = text.filter(link => link !== undefined);
          const data_json = {href: filteredLinks[2], text: filteredLinks[1], file: path}
          linksArray.push(data_json)
        }
      }
    }
    console.log(linksArray)
    return linksArray
  });
}

const extractLinks = (paths) => {
  let promiseArray = []
  for (const path of paths){
    promiseArray.push(readfilePromise(path))
  }
  return Promise.all(promiseArray).then((values) => values.flat())
}
readfilePromise(argsTerminal[2]);



module.exports = {
  readfilePromise,
  extractLinks,
}