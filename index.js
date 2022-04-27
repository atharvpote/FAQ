const questions = document.querySelectorAll(".faq__question-block");

questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("faq__question-block--active");
  });
});
