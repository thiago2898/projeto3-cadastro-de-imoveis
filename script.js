let menu = ``
const imoveis = []
const infImovel = {}

do {
    menu = prompt(`Quantidade de imóveis cadastrados: ${imoveis.length}
    1- Salvar novo imóvel
    2- Listar imóveis salvos
    3- Sair`)

    switch (menu) {
        case '1':
            infImovel.proprietario = prompt('Qual seu nome?')
            infImovel.qntdQuartos = parseInt(prompt('Quantos quartos tem seu imóvel?'))
            infImovel.qntdBanheiros = parseInt(prompt('Quantos banheiros tem seu imóvel?'))
            infImovel.garagem = prompt('Seu imóvel possui garagem?')
            let confirmacao = confirm('Deseja salvar as informações?')
            if (confirmacao == true) {
                imoveis.push(infImovel)
            }
            break
        case '2':
            alert(imoveis)
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida.')
    }
} while (menu !== '3')