// =============================
// PERSONALIZA AQUÍ TU REGALO 💗
// =============================
const CONFIG = {
  nombre: "mi niña bonita", // <-- cambia esto por el nombre de tu amiga
  mensaje:
    "Deseo de corazón que este nuevo año de tu vida esté lleno de momentos bonitos, risas, sueños cumplidos y personas que te quieran muchísimo."
};

// Coloca el nombre y mensaje en la página.
document.getElementById("friendNameIntro").textContent = CONFIG.nombre;
document.getElementById("friendName").textContent = CONFIG.nombre;
document.getElementById("message").textContent = CONFIG.mensaje;

const intro = document.getElementById("intro");
const garden = document.getElementById("garden");
const startBtn = document.getElementById("startBtn");
const replayBtn = document.getElementById("replayBtn");
const petals = document.getElementById("petals");

function createPetals() {
  petals.innerHTML = "";
  for (let i = 0; i < 38; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = (5 + Math.random() * 7) + "s";
    p.style.animationDelay = (Math.random() * 4) + "s";
    p.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    p.style.scale = (0.55 + Math.random() * 1.1);
    petals.appendChild(p);
  }
}

// Música/effecto suave sin necesidad de archivos externos.
// El navegador permite sonido porque se inicia después de tocar el botón.
function playSoftChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const notes = [523.25, 659.25, 783.99, 1046.5];

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.value = freq;

      gain.gain.setValueAtTime(0.0001, ctx.currentTime + i * 0.22);
      gain.gain.exponentialRampToValueAtTime(0.055, ctx.currentTime + i * 0.22 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.22 + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + i * 0.22);
      osc.stop(ctx.currentTime + i * 0.22 + 1.25);
    });
  } catch (e) {
    // Si el navegador no permite Web Audio, la animación sigue funcionando.
  }
}

function openSurprise() {
  intro.classList.remove("active");
  garden.classList.add("active");
  createPetals();
  playSoftChime();
}

function replay() {
  garden.classList.remove("active");
  void garden.offsetWidth; // reinicia las animaciones CSS
  garden.classList.add("active");
  createPetals();
  playSoftChime();
}

startBtn.addEventListener("click", openSurprise);
replayBtn.addEventListener("click", replay);
