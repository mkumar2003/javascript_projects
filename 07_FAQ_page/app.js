

//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
     question.classList.toggle("show-text");
    });

  });
});



//  const btns = document.querySelectorAll(".question-btn");

//  btns.forEach(function (btn) {
//    btn.addEventListener("click", function (e) {
//      const question = e.currentTarget.parentElement.parentElement;
//      console.log(question)
//      question.classList.toggle("show-text");
//  });
// });