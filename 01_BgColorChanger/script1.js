const btn = document.querySelector("button")
const span = document.querySelector("span")

const randomColor = function(){

    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()* 16)]
    }
    return color;
}

btn.addEventListener("click",()=>{
    let color =  randomColor();

    span.innerHTML = color;
    document.body.style.backgroundColor = color;
})