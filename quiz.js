let quizIndex = 0;
let currentLang = "en";
let choices = [];
let answered = false;

const quizWordEl = document.getElementById("quizWord");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextQuizBtn");
const langButtons = document.querySelectorAll(".lang-btn");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function generateQuiz() {
  answered = false;
  const vocab = vocabList[quizIndex];
  quizWordEl.textContent = vocab.word;

  let allChoices = vocabList.map(v => v.meaning[currentLang] || "—");
  allChoices = shuffle(allChoices).slice(0, 3);

  if (!allChoices.includes(vocab.meaning[currentLang])) {
    allChoices.push(vocab.meaning[currentLang]);
  }

  choices = shuffle(allChoices);

  choicesEl.innerHTML = "";
  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.classList.add("choice-btn");
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(btn, vocab.meaning[currentLang]);
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(btn, correctAnswer) {
  if (answered) return;
  answered = true;
  const selected = btn.textContent.trim();
  if (selected === correctAnswer) {
    btn.style.background = "#00d26a";
  } else {
    btn.style.background = "#ff2b2b";
    const correctBtn = [...choicesEl.children].find(
      b => b.textContent.trim() === correctAnswer
    );
    if (correctBtn) correctBtn.style.background = "#00d26a";
  }
}

nextBtn.addEventListener("click", () => {
  quizIndex = (quizIndex + 1) % vocabList.length;
  generateQuiz();
});

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.getAttribute("data-lang");
    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    generateQuiz();
  });
});

generateQuiz();