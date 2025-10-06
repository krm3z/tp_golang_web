const btn = document.querySelector("button");
btn.addEventListener("mouseenter", () => {
  btn.style.transform = "scale(1.05)";
});
btn.addEventListener("mouseleave", () => {
  btn.style.transform = "scale(1)";
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  const name = form.querySelector('input[name="Name"]').value.trim();
  const age = form.querySelector('input[name="Age"]').value.trim();

  if (name === "" || age === "") {
    event.preventDefault();
    alert("⚠️ Merci de remplir au minimum le nom et l’âge !");
  } else if (isNaN(age)) {
    event.preventDefault();
    alert("⚠️ L’âge doit être un nombre !");
  } else {
    btn.textContent = "⏳ Création...";
    btn.disabled = true;
    setTimeout(() => form.submit(), 1000);
  }
});

const hour = new Date().getHours();
const body = document.body;

if (hour >= 6 && hour < 12) {
  body.style.background = "linear-gradient(135deg, #fde68a, #f59e0b)";
} else if (hour >= 12 && hour < 18) {
  body.style.background = "linear-gradient(135deg, #22d3ee, #6366f1)";
} else {
  body.style.background = "linear-gradient(135deg, #0f172a, #1e293b)";
}
