function calcular() {

    let produto = document.getElementById('valor-de-custo')
    let lucro = document.getElementById('input-porcentagem')
    let embalagem = document.getElementById('input-embalagem')
    let porcentagem_loja_virtual = document.getElementById('input-loja-virtual')

    let p = document.getElementById('p')

    let preco = (((Number(produto.value) * ((Number(lucro.value) / 100) + 1)) + Number(embalagem.value)) * ((Number(porcentagem_loja_virtual.value) / 100) + 1))

    function ajuste(nr, casas) {
        const og = Math.pow(10, casas)
        return Math.floor(nr * og) / og;
      }

    p.innerHTML = `R$ ${ajuste(preco, 1) + '9'}`

}

function limpar() {

    let produto = document.getElementById('valor-de-custo')
    let p = document.getElementById('p')

    produto.value = ''

    p.innerHTML = 'Preço Final'

}

function limpar_all() {
    
    let produto = document.getElementById('valor-de-custo')
    let lucro = document.getElementById('input-porcentagem')
    let embalagem = document.getElementById('input-embalagem')
    let porcentagem_loja_virtual = document.getElementById('input-loja-virtual')

    let p = document.getElementById('p')
    
    produto.value = ''
    lucro.value = ''
    embalagem.value = ''
    porcentagem_loja_virtual.value = ''

    p.innerHTML = 'Preço Final'

}
