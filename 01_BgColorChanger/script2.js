const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const span = document.querySelector("span")

console.log(start);

const randomColor = function(){

    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()* 16)]
    }
    return color;
}

let intervalID;

const startChangingColor = function(){
       if (!intervalID) {              //if intevalID is null or undefined
          intervalID =  setInterval(() => {
            span.innerHTML = randomColor();
            document.body.style.backgroundColor = randomColor();
           }, 100);
       }
}

const stopChangingColor = function(){
    clearInterval(intervalID);
    intervalID = null;                             //just for better performance so that 
                                                   //it is reset and memory is released.
}

start.addEventListener("click",startChangingColor);
stop.addEventListener("click",stopChangingColor);