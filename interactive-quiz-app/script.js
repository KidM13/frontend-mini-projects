const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next');
const message = document.getElementById('message');

let currentIndex = 0;

const quizData = [
  {
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "What does HTML stand for?",
    options: ["High Text Machine Language", "Hyper Text Markup Language", "Hyper Transfer Mark Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  }
];

function loadQuestion() {
  message.textContent = '';
  const current = quizData[currentIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = '';

  current.options.forEach(option => {
    const label = document.createElement('label');
    label.innerHTML = `
      <input type="radio" name="answer" value="${option}">
      ${option}
    `;
    optionsEl.appendChild(label);
  });
}

nextBtn.addEventListener('click', () => {
  const selected = document.querySelector('input[name="answer"]:checked');

  if (!selected) {
    message.textContent = "Please select an answer";
    message.className = 'wrong';
    return;
  }

  if (selected.value === quizData[currentIndex].answer) {
    message.textContent = "Correct!";
    message.className = 'correct';
  } else {
    message.textContent = "Wrong!";
    message.className = 'wrong';
  }

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < quizData.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz Finished 🎉";
      optionsEl.innerHTML = '';
      nextBtn.style.display = 'none';
      message.textContent = '';
    }
  }, 800);
});

loadQuestion();
