document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("igStoreUsuarios")) || [];

    const existe = usuarios.some(usuario => usuario.email === email);

    if (existe) {
        alert("Este e-mail já está cadastrado!");
        return;
    }

    usuarios.push({
        nome: nome,
        email: email,
        senha: senha
    });

    localStorage.setItem("igStoreUsuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";
});