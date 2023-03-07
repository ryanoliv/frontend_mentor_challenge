const buttons = document.querySelectorAll(
  ".section__card--rating-list-numbers"
);

const submit = document.querySelector(".btn");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", () => {
//     buttons[i].classList.toggle("active");
//   });
// }

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.dataset) {
      buttons.forEach((e) => e.classList.remove("active"));
      button.classList.add("active");
    }
    if (event.target.dataset.correct == "true") {
      correctAnswer++;
    }
    const rating = button.textContent;
    console.log(rating);
    // userRating.textContent = `You selected ${rating}. HOPPA!`;
  });
});
