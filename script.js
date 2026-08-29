/* ==========================================================
   SCRIPT.JS - PARTE 1
   Bienvenida + Carta + Máquina de escribir
========================================================== */

const welcome = document.getElementById("welcome");
const experience = document.getElementById("experience");

const startButton = document.getElementById("startButton");

const letterCard = document.querySelector(".letter-card");

const letterText = document.getElementById("letterText");

const continueButton = document.getElementById("continueButton");

const music = document.getElementById("music");

/*========================
 MENSAJE
========================*/

const message = `Mi amor,

Hoy celebramos cuatro meses juntos.

Gracias por cada sonrisa, cada abrazo y cada momento que hemos compartido.

Desde que llegaste a mi vida, cada día tiene un motivo especial.

Espero que esta pequeña sorpresa te recuerde cuánto te amo y lo feliz que soy a tu lado.

Felices cuatro meses, mi princesa. 🌻💜

Con todo mi amor ❤️`;

/*========================
 COMENZAR
========================*/

startButton.addEventListener("click", () => {

    welcome.style.display = "none";

    experience.classList.remove("hidden");

    requestAnimationFrame(() => {
        letterCard.classList.add("show");
    });

    music.play().catch(() => {});

    setTimeout(typeWriter, 700);

});

/*========================
 MÁQUINA DE ESCRIBIR
========================*/

function typeWriter() {

    let i = 0;

    letterText.textContent = "";

    letterText.classList.add("typing");

    function write() {

        if (i < message.length) {

            letterText.textContent += message.charAt(i);

            i++;

            setTimeout(write, 35);

        } else {

            letterText.classList.remove("typing");

            continueButton.classList.remove("hidden");

        }

    }

    write();

}

/*========================
 CONTINUAR
========================*/

continueButton.addEventListener("click", () => {

    document.getElementById("counterSection").scrollIntoView({

        behavior: "smooth"

    });

});
/* ==========================================================
   SCRIPT.JS - PARTE 2
   Contador + Galería + Efectos + Reinicio
========================================================== */

/*========================
 CONTADOR
========================*/

const startDate = new Date("2026-05-01T00:00:00");

function updateCounter() {

    const now = new Date();

    let months =
        (now.getFullYear() - startDate.getFullYear()) * 12 +
        (now.getMonth() - startDate.getMonth());

    if (now.getDate() < startDate.getDate()) {
        months--;
    }

    const diff = now - startDate;

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCounter();
setInterval(updateCounter, 1000);

/*========================
 GALERÍA
========================*/

const photos = [
    "img/foto1.jpg",
    "img/foto2.jpg",
    "img/foto3.jpg",
    "img/foto4.jpg",
    "img/foto5.jpg",
    "img/foto6.jpg",
    "img/foto7.jpg",
    "img/foto8.jpg",
    "img/foto9.jpg"
];

let currentPhoto = 0;

const galleryImage = document.getElementById("galleryImage");
const photoCounter = document.getElementById("photoCounter");

function showPhoto() {

    galleryImage.style.opacity = 0;

    setTimeout(() => {

        galleryImage.src = photos[currentPhoto];

        galleryImage.style.opacity = 1;

        photoCounter.textContent =
            `${currentPhoto + 1} / ${photos.length}`;

    }, 250);

}

document.getElementById("nextPhoto")
.addEventListener("click", () => {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    showPhoto();

});

document.getElementById("prevPhoto")
.addEventListener("click", () => {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    showPhoto();

});

setInterval(() => {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    showPhoto();

}, 5000);

/*========================
 ESTRELLAS
========================*/

const stars = document.getElementById("stars");

for (let i = 0; i < 70; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);

}

/*========================
 PÉTALOS
========================*/

const petals = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.textContent = "🌻";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (18 + Math.random() * 18) + "px";
    petal.style.animationDuration = (6 + Math.random() * 4) + "s";

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);

}

setInterval(createPetal, 1200);

/*========================
 REINICIAR
========================*/

document.getElementById("restartButton")
.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

    setTimeout(() => {

        location.reload();

    }, 600);

});