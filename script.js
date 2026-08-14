const openBtn = document.getElementById("openBtn");
const restartBtn = document.getElementById("restartBtn");
const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");
const petals = document.querySelector(".petals");

function makePetal() {
  const p = document.createElement("span");
  p.className = "petal";
  p.style.left = Math.random() * 100 + "vw";
  p.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
  p.style.animationDuration = (5 + Math.random() * 6) + "s";
  p.style.animationDelay = (Math.random() * 2) + "s";
  p.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.65 + Math.random() * .8})`;
  petals.appendChild(p);
  setTimeout(() => p.remove(), 13000);
}

function startPetals() {
  for (let i = 0; i < 22; i++) setTimeout(makePetal, i * 120);
  setInterval(makePetal, 420);
}

openBtn.addEventListener("click", () => {
  intro.style.display = "none";
  birthday.classList.add("show");
  window.scrollTo({ top: 0, behavior: "smooth" });
  startPetals();
});

restartBtn.addEventListener("click", () => {
  birthday.classList.remove("show");
  intro.style.display = "grid";
  window.scrollTo({ top: 0, behavior: "smooth" });
});
