const buttons = document.querySelectorAll(
  ".section__card--rating-list-numbers"
);
const submit = document.querySelector(".btn");
let rating;
const star = document.querySelector(".section__card--star");
const text = document.querySelector(".section__card--text");
const ratingContainer = document.querySelector(".section__card--rating");
const loader = document.querySelector(".loader");

const userRating = document.querySelector(".user-rating");
const hiddenSection = document.querySelector(".section__card--dynamic-content");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.dataset) {
      buttons.forEach((e) => e.classList.remove("active"));
      button.classList.add("active");
    }
    if (event.target.dataset.correct == "true") {
      correctAnswer++;
    }
    rating = button.textContent;
  });
});

submit.addEventListener("click", () => {
  star.classList.add("hidden");
  text.classList.add("hidden");
  ratingContainer.classList.add("hidden");
  submit.style.display = "none";
  loader.classList.remove("hidden");
  setTimeout(() => {
    console.log("Delayed for 3 second.");
    loader.classList.add("hidden");
    hiddenSection.classList.remove("hidden");
    userRating.innerHTML = rating;
  }, 1500);
});
