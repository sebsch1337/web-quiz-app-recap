const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');

console.log(bookmarkButton);

bookmarkButton.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("bookmark--active");
});
