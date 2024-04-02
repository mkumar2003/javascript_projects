const btn = document.querySelector(".sidebar-toggle")
const element  = document.querySelector(".sidebar")

const close = document.querySelector(".close-btn")

console.log(btn);
btn.addEventListener("click", ()=> {
         element.classList.toggle("show-sidebar");
})

close.addEventListener("click", ()=> {
    element.classList.toggle("show-sidebar");
})

//or 
// close.addEventListener("click", ()=> {
//     element.classList.remove("show-sidebar");
// })

//classical approach
  // if (element).classList.contains("show-sidebar")) {
  //   element.classList.remove("show-sidebar");
  // } else {
  //   element.classList.add("show-sidebar");
  // }