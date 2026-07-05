var nome = prompt("Qual é o seu nome?");
if (nome) {
  alert("Olá, " + nome + "! Bem-vindo(a)!");
} else {
  alert("Olá! Bem-vindo(a)!");
}

const esperarSegundos = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function executarAcoes() {
  console.log("Iniciando a primeira função...");
  
  // Ação 1 executada
  console.log("Ação 1 concluída.");

  // Pausa de 3 segundos (3000 milissegundos)
  await esperarSegundos(3000); 

  // Ação 2 executada após a pausa
  console.log("Ação 2 executada após 3 segundos!");
}

executarAcoes();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { esperarSegundos, executarAcoes };
} else {
  window.esperarSegundos = esperarSegundos;
  window.executarAcoes = executarAcoes;
}