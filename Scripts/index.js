// Seleciona os botões de todas as categorias
let botoesVerMais = document.querySelectorAll(
  ".vermais-consultas, .vermais-exames, .vermais-cirugias"
);
let fechar = document.querySelectorAll(".detalhes p span");

function detalhes(event) {
  let botao = event.target;
  let detalhes = botao.closest(".servico").querySelector(".detalhes");

  if (detalhes.classList.contains("abrir")) {
    detalhes.classList.remove("abrir");
    setTimeout(() => {
      detalhes.style.padding = "0px";
      detalhes.style.border = "none";
    }, 450);
  } else {
    detalhes.classList.add("abrir");
    detalhes.style.padding = "20px";
    detalhes.style.paddingTop = "10px";
    detalhes.style.border = "2px black solid";
    detalhes.style.overflow = "auto";
  }
}

botoesVerMais.forEach((botao) => {
  botao.addEventListener("click", detalhes);
});
fechar.forEach((e) => {
  e.addEventListener("click", detalhes);
});
