let index = 0;
let currentLang = "en";

const wordEl = document.getElementById("word");
const meaningEl = document.getElementById("meaning");
const card = document.getElementById("flashcard");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const langButtons = document.querySelectorAll(".lang-btn");

function showCard(i) {
  const vocab = vocabList[i];
  if (!vocab) return;
  wordEl.textContent = vocab.word;
  meaningEl.textContent = vocab.meaning[currentLang] || "—";
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % vocabList.length;
  card.classList.remove("flipped");
  showCard(index);
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + vocabList.length) % vocabList.length;
  card.classList.remove("flipped");
  showCard(index);
});

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.getAttribute("data-lang");
    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    showCard(index);
  });
});

showCard(index);