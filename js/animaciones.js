// 💬 Efecto de letras animadas al cargar la primera pantalla
window.addEventListener("DOMContentLoaded", () => {
  const contenedorMensaje = document.querySelector(".mensaje-inicial h1");
  const texto = "Holiiiiiis🤗 desaparecidooo🧐0w0jsjs";
  contenedorMensaje.innerHTML = "";

  [...texto].forEach((letra, i) => {
    const span = document.createElement("span");
    span.textContent = letra;
    span.className = "letra grande";
    span.style.animationDelay = `${i * 0.05}s`;
    contenedorMensaje.appendChild(span);
  });
});

// 🏃‍♂️ Evasión del botón por 5 intentos
let intentos = 0;
const boton = document.getElementById("boton-sorpresa");

boton.addEventListener("mouseover", () => {
  if (intentos < 5) {
    const nuevaX = Math.random() * 80;
    const nuevaY = Math.random() * 60;
    boton.style.position = "absolute";
    boton.style.left = `${nuevaX}vw`;
    boton.style.top = `${nuevaY}vh`;
    intentos++;
  }
});

// 🎉 Evento al hacer clic en el botón sorpresa
boton.addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("cumple").style.display = "block";

  // 🎊 Lanzar confetti
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
    confetti.style.top = "-10px";
    document.body.appendChild(confetti);
  }

  // 🎈 Lanzar globos
  for (let i = 0; i < 5; i++) {
    const globo = document.createElement("img");
    globo.src = "images/globos.png";
    globo.className = "globo";
    globo.style.left = Math.random() * 100 + "vw";
    globo.style.animationDuration = (Math.random() * 5 + 5) + "s";
    globo.style.bottom = "-60px";
    globo.style.width = "120px";
    globo.style.zIndex = "0";
    document.body.appendChild(globo);
  }

  // ✨ Animación de letras para el título de cumpleaños
  const tituloCumple = document.getElementById("titulo-cumple");
  const mensajeCumple = "🎉🎂¡Feliiiz cumpleaños DAVID!🎉🎂";
  tituloCumple.innerHTML = "";

  [...mensajeCumple].forEach((letra, i) => {
    const span = document.createElement("span");
    span.textContent = letra;
    span.className = "letra titulo-cumple";
    span.style.animationDelay = `${i * 0.05}s`;
    tituloCumple.appendChild(span);
  });
});