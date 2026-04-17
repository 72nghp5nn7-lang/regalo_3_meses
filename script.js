let screens = document.querySelectorAll(".screen");
let current = 0;

function nextScreen() {
    if (current >= screens.length - 1) return;

    screens[current].classList.remove("active");
    current++;
    screens[current].classList.add("active");

    if (current === 3) {
        document.getElementById("texto-final").innerHTML = "";
        i = 0;
        escribirTexto();
    }

    document.getElementById("music").play();
}
let fotos = [
    "fotos/foto1.jpg",
    "fotos/foto2.jpg",
    "fotos/foto3.jpg",
    "fotos/foto4.jpg",
    "fotos/foto5.jpg"
];

let textos = [
    "Mi favorita ❤️",
    "Ese día fue muy especial",
    "Nunca voy a olvidar esto",
    "Contigo todo es mejor",
    "Te amo ❤️"
];

let indexFoto = 0;

function cambiarFoto() {
    indexFoto++;
    if (indexFoto >= fotos.length) indexFoto = 0;

    document.getElementById("foto").src = "/static/" + fotos[indexFoto];
    document.getElementById("texto").innerText = textos[indexFoto];
}
let mensaje = "Puede que no sea mucho tiempo... pero contigo todo se siente distinto ❤️ Y quiero seguir sumando meses contigo.";

let i = 0;

function escribirTexto() {
    if (i < mensaje.length) {
        document.getElementById("texto-final").innerHTML += mensaje.charAt(i);
        i++;
        setTimeout(escribirTexto, 40);
    }
}
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

// generar corazones cada cierto tiempo
setInterval(crearCorazon, 500);