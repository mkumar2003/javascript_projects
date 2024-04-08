const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");


//kahi pe bhi click karo par jab bhi button click hoga tabhi target.dataset.id mai value aayegi and if execute hoga
//click wherever you want but it will respond only when button is clicked and target.dataset.id returns some value

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {

    // remove selected from every buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    //adding active class to clicked button
    e.target.classList.add("active");


    // hide all other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

