document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    const usuarios = JSON.parse(localStorage.getItem("igStoreUsuarios")) || [];

    const usuario = usuarios.find(function(item) {
        return item.email === email && item.senha === senha;
    });

    if (usuario) {
        alert("Login realizado com sucesso! Bem-vinda, " + usuario.nome + "!");
        window.location.href = "index.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
});