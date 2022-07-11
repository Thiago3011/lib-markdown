const pegaArquivo = require('../index')

const arrayResultados = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function')
    })
    
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('C:/Users/Thiago Henrique/OneDrive/Área de Trabalho/Alura/Node.js/teste/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResultados)
    })

    it('deve msg que nao ha links', async () => {
        const resultado = await pegaArquivo('C:/Users/Thiago Henrique/OneDrive/Área de Trabalho/Alura/Node.js/teste/arquivos/texto2.md')
        expect(resultado).toBe('Não há links')
    })
})
