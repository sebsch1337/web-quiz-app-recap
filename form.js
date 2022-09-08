const cardList = document.querySelector("[data-js='card-list']");
const form = document.querySelector("[data-js='question-form']");
const questionForm = document.querySelector("[data-js='question-form']");
const questionText = document.querySelector("[data-js='question-text']");
const answerText = document.querySelector("[data-js='answer-text']");
const tag = document.querySelector("[data-js='tag-input']");
const submitButton = document.querySelector("[data-js='submit-button']");
const questionCounter = document.querySelector(
  "[data-js='question-text-counter']"
);
const answerCounter = document.querySelector("[data-js='answer-text-counter']");

function countCharacters(event) {
  const counter = 150 - event.target.value.length;
  if (event.target.dataset.js === "question-text") {
    questionCounter.textContent = `${counter} characters left`;
  } else {
    answerCounter.textContent = `${counter} characters left`;
  }
}

questionText.addEventListener("input", countCharacters);
answerText.addEventListener("input", countCharacters);

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cardItem = document.createElement("li");
  cardItem.classList = "card-list__item";
  cardList.append(cardItem);

  const card = document.createElement("article");
  card.classList = "card";
  cardItem.append(card);

  const cardQuestion = document.createElement("h2");
  cardQuestion.classList = "card__question";
  cardQuestion.textContent = questionText.value;
  card.append(cardQuestion);

  const cardAnswerButton = document.createElement("button");
  cardAnswerButton.classList = "card__button-answer";
  cardAnswerButton.textContent = "Show answer";
  card.append(cardAnswerButton);

  const cardAnswer = document.createElement("p");
  cardAnswer.classList = "card__answer";
  cardAnswer.dataset.js = "card-answer";
  cardAnswer.textContent = answerText.value;
  card.append(cardAnswer);

  const tagList = document.createElement("ul");
  tagList.classList = "card__tag-list";
  card.append(tagList);

  const tagListItem = document.createElement("li");
  tagListItem.classList = "card__tag-list-item";
  tagListItem.textContent = tag.value;
  tagList.append(tagListItem);

  const bookmarkButton = document.createElement("div");
  bookmarkButton.classList = "card_button-bookmark";
  bookmarkButton.innerHTML = `<button
                                class="bookmark"
                                aria-label="bookmark"
                                type="button"
                                data-js="bookmark-button"
                                >
                                <svg
                                    class="bookmark__icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewbox="0 0 24 24"
                                    width="24px"
                                    fill="#000000"
                                    data-js="bookmark-icon"
                                >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path
                                    d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                                    />
                                </svg>
                                </button>`;
  card.append(bookmarkButton);
});
