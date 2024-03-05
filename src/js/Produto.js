export class Produto{
    constructor(source,titulo,valor){
        this.source = source
        this.titulo = titulo
        this.valor = valor
    }

    criarElementoProduto(){
        const produtos = document.querySelector(".produtos")
        // criar um produto
        const produto = document.createElement("div")
        produto.classList.add("produto")

        // criar imagem
        const img = document.createElement("img")
        img.src = this.source
        img.classList.add("produto-img")

        // produto descricao
        const descricao = document.createElement("div")
        descricao.classList.add("produto-descricao")

        // produto descricao h2
        const h2 = document.createElement("h2")
        h2.textContent = this.titulo

        // produto descricao valor
        const valor = document.createElement("a")
        valor.innerText = this.valor

        // adicionando o h2 e o valor na div produto descricao
        descricao.append(h2,valor)

        // adicionando img e div produto descricao na div produto
        produto.append(img,descricao)
        // adicionando produto na div produtos
        produtos.appendChild(produto)
    }

}