let perguntas = document.querySelectorAll(".perguntas");

function abrir(event) {
  let botao = event.target;
  let perguntaContainer = botao.closest(".perguntas"); // Encontra a div .perguntas mais próxima
  let respostas = perguntaContainer.querySelector("p");

  // Verifica se já tem a classe "abrir-pergunta"
  if (respostas.classList.contains("abrirpergunta")) {
    respostas.classList.remove("abrirpergunta");
    respostas.style.height = "0px";
  } else {
    respostas.classList.add("abrirpergunta");
    respostas.style.height = "auto";
  }
}

// Adiciona o evento de clique para cada pergunta
perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", abrir);
});
