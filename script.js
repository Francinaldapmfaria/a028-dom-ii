//=======Exercicio1========
//Utilize o DOM para adicionar uma função ao clique do botão. Ao clicar no botão, um novo item deve ser adicionado ao container. Por enquanto, o item não precisa de estilização. Ele pode ter apenas um texto, para facilitar sua visualização.

function adicionaItem(event) {
    let novaArticle = document.createElement("article")
    // console.log(novaArticle)
    novaArticle.innerHTML= "olá"
    const elementoReferencia = document.getElementById("container")
    elementoReferencia.insertAdjacentElement("beforeend", novaArticle)
  

 // Altere a função criada no exercício 1 para que agora o clique no botão faça a **estilização** do novo item

   // novaArticle.style.backgroundColor = "green"
    // novaArticle.style.padding= "10px"
    novaArticle.setAttribute("class", "item")
}
//=======Exercício3================
//Crie a função `removeItem`, que é chamada pelo `onclick` dos itens do container. Esta função deve **remover** o elemento clicado.

//**Dica**: utilize a propriedade `event.target` para pegar o elemento clicado.

function removeItem(event){
    const quadrado = document.querySelector(".item")
    quadrado.remove()
}