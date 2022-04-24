const questions = Array.from(document.querySelectorAll(".question-block"));

questions.forEach((questionBlock) => {
  questionBlock.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("question-block--active");
  });
});
