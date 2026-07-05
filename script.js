var nome = prompt("Antes de começar, digite seu nome:");

document.getElementById("nome").innerHTML = "Olá, " + nome + "!";

console.log("Nome do usuário: " + nome);

if (nome) {
    alert("Bem-vindo, " + nome + "! Vamos começar o jogo!");
} else {
    alert("Você não digitou um nome. Por favor, recarregue a página e insira seu nome para continuar.");
}