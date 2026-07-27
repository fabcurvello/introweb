// Os dados existem, mas não aparecem na tela (O problema inicial)
const filmes = [
  { id: 1, titulo: "O Senhor dos Anéis", diretor: "Peter Jackson", ano: 2001 },
  { id: 2, titulo: "Matrix", diretor: "Lana e Lilly Wachowski", ano: 1999 },
  { id: 3, titulo: "De Volta para o Futuro", diretor: "Robert Zemeckis", ano: 1985 },
];

// Aplique as soluções necessárias abaixo desta linha!

// Etapa 1: Selecionar o container
// Cache da referência na variável, uma boa prática para evitar buscar várias vezes
const container = document.getElementById("lista-filmes");

// Etapa 2: Percorrer o array
filmes.forEach((filme) => {

  // Etapa 3: Criar o elemento html div e adicionar classe filme-card
  const card = document.createElement("div"); // html div
  card.classList.add("filme-card"); // css class

  // Etapa 4: Alterar o conteúdo interpretando tags HTML
  // Usa template strings para injetar os dados
  card.innerHTML = `
        <h3>${filme.titulo}</h3>
        <p>Diretor: ${filme.diretor}</p>
        <p>Ano: ${filme.ano}</p>
    `;

  // Etapa 5: Anexar no container principal
  container.appendChild(card);
}); // fim do forEach

// Etapa 6: Manipulando Classes via JS
// querySelector seleciona apenas o primeiro que encontrar
const primeiroFilme = document.querySelector(".filme-card");
primeiroFilme.classList.add("destaque");

// Etapa 7: Removendo elementos da árvore do DOM
// querySelectorAll seleciona todos e retorna uma lista (NodeList)
const todosOsFilmes = document.querySelectorAll(".filme-card");
// O índice [2] pega o terceiro card (De Volta para o Futuro)
const ultimoFilme = todosOsFilmes[2];
ultimoFilme.remove(); // Remove diretamente o nó da árvore do DOM
