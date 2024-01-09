const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w', encoding: 'utf8'});
    //Flag: a -> appending w -> write ... w apaga todo conteúdo, a adiciona no final

}
