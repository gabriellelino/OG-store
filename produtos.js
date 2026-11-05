
const chaveCarrinho = "igStoreCarrinho";

function adicionarAoCarrinho(id) {

    let card = document.querySelector(`.produto[data-id="${id}"]`);

    if (!card) {
        alert("Produto não encontrado!");
        return;
    }

    let carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];

    let nome = card.querySelector("h3").textContent;

    let precoTexto = card.querySelector(".preco").textContent;

    let preco = Number(
        precoTexto
            .replace("R$", "")
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
    );

    let imagem = card.querySelector("img").getAttribute("src");

    let produto = carrinho.find(item => item.id === id);

    if (produto) {

        produto.quantidade++;

    } else {

        carrinho.push({
            id: id,
            nome: nome,
            preco: preco,
            imagem: imagem,
            quantidade: 1
        });

    }

    localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));

    alert(nome + " foi adicionado ao carrinho!");
}
