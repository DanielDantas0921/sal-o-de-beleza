import {Produto} from "./Produto.js"

const btndireita = document.querySelector(".controle-direita")
const btnesquerda = document.querySelector(".controle-esquerda")

let contadarMarginLeft = 0
const limitewidth = 800



btndireita.addEventListener("click", ()=>{
    const produto = document.querySelector(".produto")
    if(contadarMarginLeft > -limitewidth){

        contadarMarginLeft = contadarMarginLeft - 200
        produto.style.marginLeft = contadarMarginLeft + "px"
    } 
})

btnesquerda.addEventListener("click", function(){
    const produto = document.querySelector(".produto")
    if(contadarMarginLeft < 0){
        contadarMarginLeft = contadarMarginLeft +200
        produto.style.marginLeft = contadarMarginLeft + "px"
    }
})

// criar os cards de serviços dinamicamente

const p1 = new Produto("./src/img/cortar-cabelo.jpeg","Corte de Cabelo", "R$: 30,00")
p1.criarElementoProduto()


const p2 = new Produto("./src/img/pintar-cabelo.jpg","Pintar Cabelo", "R$: 40,00")
p2.criarElementoProduto()


const p3 = new Produto("./src/img/hidratar-cabelo.png","Hidratar Cabelo", "R$: 20,00")
p3.criarElementoProduto()

const p4 = new Produto("./src/img/fazer-sombracelha.jpeg","Fazer sombracelha", "R$: 25,00")
p4.criarElementoProduto()

const p5 = new Produto("./src/img/pintar-unhas.jpg", "Pintar unhas", "R$: 30,00")
p5.criarElementoProduto()

const p6 = new Produto("./src/img/fazer-unhas.jpg", "Fazer unhas", "R$: 20,00")
p6.criarElementoProduto()

const p7 = new Produto("./src/img/maquiagem.jpg", "fazer maquiagem", "R$: 30,00")
p7.criarElementoProduto()