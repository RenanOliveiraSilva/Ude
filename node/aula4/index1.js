const fs = require('fs').promises; //File System, pacote do node
const path = require('path'); 

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname); // Recebendo um caminho, ou por padrão o caminho da pasta atual

    const files = await fs.readdir(rootDir); // Utilizando a função readdir do fs para listar os arquivos dentro do diretório informando
    walk(files, rootDir); //Chamando outra função

}

async function walk(files, rootDir) {
    
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue; //Ignorando arquivos git
        if (/node_modules/g.test(fileFullPath)) continue; //Ignorando node_modules

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if (!/.html/g.test(fileFullPath)) continue;
        
        console.log(fileFullPath);

    }
}

readdir("c:/projetosProgramação/JavaScript/UdemyJavaScript");