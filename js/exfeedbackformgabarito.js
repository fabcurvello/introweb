// PONTO DE PARTIDA - Seleção dos elementos do HTML
const form = document.getElementById("form-feedback");
const inputNome = document.getElementById("nome");
const inputComentario = document.getElementById("comentario");
const mensagem = document.getElementById("mensagem-feedback");
const listaComentarios = document.getElementById("lista-comentarios");

// SEU CÓDIGO COMEÇA AQUI:

// ETAPA 1: Interceptando o Envio do Formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o recarregamento da página

  // Etapa 2: Pegando os Valores Digitados
  const nomeDigitado = inputNome.value.trim();
  const comentarioDigitado = inputComentario.value.trim();

  // Etapa 3: Criando a Validação
  if (nomeDigitado === "" || comentarioDigitado === "") {
    // Regra de erro
    // Etapa 4: Feedback de Erro
    mensagem.textContent = "Erro: Preencha todos os campos!";
    mensagem.style.color = "red";
  } else {
    // Regra de sucesso
    // Etapa 4: Feedback de Sucesso
    mensagem.textContent = "Feedback enviado com sucesso!";
    mensagem.style.color = "green";

    //Etapa 5: Renderizando o Novo Item na Tela
    // Criação e inserção do novo elemento
    const novoItem = document.createElement("li");
    novoItem.textContent = nomeDigitado + " disse: " + comentarioDigitado;
    listaComentarios.appendChild(novoItem);

    // Limpeza dos campos
    inputNome.value = "";
    inputComentario.value = "";
  }
});
