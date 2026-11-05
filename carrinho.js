const chaveCarrinho = "igStoreCarrinho";

let carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];

const imagens = {
    blusa: "WhatsApp Image 2026-11-05 at 11.22.40.jpeg",
    calca: "WhatsApp Image 2026-11-05 at 11.39.28.jpeg",
    vestido: "WhatsApp Image 2026-11-05 at 11.14.41.jpeg",
    saia: "WhatsApp Image 2026-11-05 at 11.35.29.jpeg",
    camiseta: "WhatsApp Image 2026-11-05 at 10.58.55.jpeg",
    jorts: "WhatsApp Image 2026-11-05 at 11.27.12.jpeg"
};

function mostrarCarrinho() {
    let container = document.getElementById("produtos-carrinho");

    container.innerHTML = "";

    if (carrinho.length === 0) {
        container.innerHTML = "<p class='vazio'>Seu carrinho está vazio.</p>";
        atualizarTotal();
        return;
    }

    carrinho.forEach((produto, indice) => {

        let imagem = imagens[produto.id] || produto.imagem;

        let item = document.createElement("div");
        item.className = "produto-carrinho";

        let foto = document.createElement("img");
        foto.src = imagem;
        foto.alt = produto.nome;

        let informacoes = document.createElement("div");
        informacoes.className = "informacoes";

        let nome = document.createElement("h3");
        nome.textContent = produto.nome;

        let preco = document.createElement("p");
        preco.textContent = "R$ " + produto.preco.toFixed(2).replace(".", ",");

        let quantidade = document.createElement("div");
        quantidade.className = "quantidade";

        let diminuir = document.createElement("button");
        diminuir.textContent = "−";
        diminuir.onclick = () => alterarQuantidade(indice, -1);

        let numero = document.createElement("span");
        numero.textContent = produto.quantidade;

        let aumentar = document.createElement("button");
        aumentar.textContent = "+";
        aumentar.onclick = () => alterarQuantidade(indice, 1);

        let remover = document.createElement("button");
        remover.className = "remover";
        remover.textContent = "Remover";
        remover.onclick = () => removerProduto(indice);

        quantidade.append(diminuir, numero, aumentar);
        informacoes.append(nome, preco, quantidade, remover);
        item.append(foto, informacoes);

        foto.onerror = function() {
            foto.alt = "Imagem não encontrada: " + imagem;
        };

        container.appendChild(item);
    });

    atualizarTotal();
}

function alterarQuantidade(indice, valor) {
    carrinho[indice].quantidade += valor;

    if (carrinho[indice].quantidade <= 0) {
        carrinho.splice(indice, 1);
    }

    salvarCarrinho();
}

function removerProduto(indice) {
    carrinho.splice(indice, 1);
    salvarCarrinho();
}

function salvarCarrinho() {
    localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));
    mostrarCarrinho();
}

function atualizarTotal() {
    let total = carrinho.reduce((soma, produto) => {
        return soma + produto.preco * produto.quantidade;
    }, 0);

    document.getElementById("total").textContent =
        "R$ " + total.toFixed(2).replace(".", ",");
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("Compra demonstrativa finalizada!");

    carrinho = [];
    salvarCarrinho();
}

mostrarCarrinho();