const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');

const answerButton = document.querySelector('[data-js="answer-button"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", () => {
  if (answerButton.textContent === "Hide answer") {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "Hide answer";
  }
  cardAnswer.classList.toggle("card__answer--active");
});
