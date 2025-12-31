/* ===============================
   TEXTO DIGITANDO (CORRIGIDO)
================================ */
const text = "Fico feliz em saber que estamos passando nosso primeiro ano novo juntos, estou dedicando a você este texto, estou aproveitando este momento a sós com você meu amor, ainda que não tenha virado o ano, eu gostaria de dizer e desejar que o nosso amor continue crescendo sempre e trazendo alegria e amor em cada momento de nossas vidas. Eu te amo muito meu amor! Obrigado por tudo minha princesa, saiba que eu te amo hoje, amanhâ e sempre, você é uma mulher maravilhosa e sensacional, vc é muito especial na minha vida, obrigado por tudo amor da minha vida, saiba que eu sempre estarei aqui ao seu lado, independente de tudo, lutarei sempre pelo nosso amor. O nosso amor vibra em cores, sabores, amores, encantos e luzes. A nossa alma transborda de amor, os olhos falam, a boca sussurra e os nossos corpos vibram❤️";
const typedText = document.getElementById("typedText");
const loveFinal = document.getElementById("loveFinal");

typedText.innerHTML = "";
loveFinal.style.opacity = 0;

let index = 0;
const typingSpeed = 55; // quanto menor, mais rápido

function typeWriter() {
    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        setTimeout(() => {
            loveFinal.style.opacity = 1;
            startFireworks(); // inicia os fogos no final
        }, 800);
    }
}

// Delay antes de começar (efeito mais emocional)
setTimeout(typeWriter, 1200);

typeWriter();

/* ===============================
   CORAÇÕES
================================ */
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const size = 15 + Math.random() * 35;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 4 + Math.random() * 4 + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 180);

/* ===============================
   PARTÍCULAS CINTILANTES
================================ */
const sparklesContainer = document.querySelector('.sparkles');

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = '100vh';
    sparkle.style.animationDuration = 2 + Math.random() * 3 + 's';

    sparklesContainer.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 4000);
}

setInterval(createSparkle, 300);

/* ===============================
   MÚSICA COM FADE
================================ */
const music = document.getElementById('music');
const musicButton = document.getElementById('musicButton');

music.volume = 0;

function fadeInMusic() {
    let volume = 0;
    const fade = setInterval(() => {
        if (volume < 1) {
            volume += 0.02;
            music.volume = volume;
        } else {
            clearInterval(fade);
        }
    }, 100);
}

musicButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        fadeInMusic();
        musicButton.textContent = '⏸️ Pausar Música';
    } else {
        music.pause();
        musicButton.textContent = '▶️ Tocar Música';
    }
});

/* ===============================
   MENSAGEM SURPRESA NA FOTO
================================ */
const photo = document.getElementById("photo");

photo.addEventListener("click", () => {
    alert("Você é o melhor capítulo da minha vida. Eu te escolheria em todas as vidas ❤️");
});

/* ===============================
   FOGOS EM FORMATO DE CORAÇÃO
================================ */
function startFireworks() {
    for (let i = 0; i < 6; i++) {
        setTimeout(createHeartFirework, i * 800);
    }
}

function createHeartFirework() {
    const firework = document.createElement("div");
    firework.classList.add("firework");

    firework.style.left = Math.random() * 80 + 10 + "vw";
    firework.style.top = Math.random() * 50 + 20 + "vh";

    const heartShape = [
        [-10, -10],
        [10, -10],
        [-20, 0],
        [20, 0],
        [-30, 15],
        [30, 15],
        [-15, 30],
        [15, 30],
        [0, 40]
    ];

    heartShape.forEach(pos => {
        const spark = document.createElement("span");
        spark.style.setProperty("--x", pos[0] + "px");
        spark.style.setProperty("--y", pos[1] + "px");
        firework.appendChild(spark);
    });

    document.body.appendChild(firework);

    setTimeout(() => firework.remove(), 1600);
}