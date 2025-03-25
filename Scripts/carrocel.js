let index = 0;
const slides = document.querySelectorAll(".slide");

function mudarSlide(direcao) {
  slides[index].classList.remove("ativo");
  index = (index + direcao + slides.length) % slides.length;
  slides[index].classList.add("ativo");
}

setInterval(() => {
  mudarSlide(1);
}, 5000);
