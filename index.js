const chalk = require('chalk')
const fs = require('fs')

const trataErro = (erro) => {
    throw new Error(chalk.red(erro.code, '- NÃO HÁ ARQUIVO NO CAMINHO'))
}

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
        console.log(chalk.green(texto))
    } catch (erro) {
        trataErro(erro)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

// function pegaArquivo(caminhoDoArquivo) {
//     fs.promises.readFile(caminhoDoArquivo, 'utf-8')
//         .then( (texto) =>console.log(chalk.green(texto)))
//         .catch( (erro) => trataErro(erro))
// }


// function pegaArquivo(caminhoDoArquivo) {
//     fs.readFile(caminhoDoArquivo, 'utf-8', (erro, texto) => {

//         if (erro) {
//             trataErro(erro)
//         }

//         console.log(chalk.green(texto))
//     })
// }

pegaArquivo('./arquivos/texto1.md')