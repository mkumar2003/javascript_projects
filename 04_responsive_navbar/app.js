// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const btn = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

console.log(btn);
btn.addEventListener("click",() => {
    // console.log(links.classList.contains("random"));    //prints "false"
    //  console.log(links.classList.contains("links"));    //print  "true"


    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // }else{
    //     links.classList.add("show-links");
    // }


    //using toggle class feature

    links.classList.toggle("show-links");
})