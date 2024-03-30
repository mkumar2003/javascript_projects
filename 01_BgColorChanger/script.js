const btn = document.querySelector("button")
const body = document.querySelector("body")
const span = document.querySelector("span")

//we can use document.body.style directly rather than importing body as a event listener.

const arr = ["red","green","blue","yellow"]


btn.addEventListener("click", ()=> {

    const randomNumber = generateRandomNumber();
    span.innerHTML = arr[randomNumber]
    document.body.style.backgroundColor = arr[randomNumber];
})

function generateRandomNumber() {
    return Math.floor(Math.random() * (arr.length))
}














//good if we want to print in a particular sequence
/* let flag = 0;

btn.addEventListener("click",() => {
    if (flag===0) {
      span.innerHTML = "red";
       body.style.backgroundColor = arr[0];  
       flag = flag + 1;
       console.log(flag)
    }
    else if(flag===1) 
    {
        span.innerHTML = arr[1]
        body.style.backgroundColor = arr[1]; 
        flag = flag + 1;
        console.log(flag)
    }
    else if(flag===2) 
    {
        span.innerHTML = arr[2]
        body.style.backgroundColor = arr[2]; 
        flag = flag + 1;
        console.log(flag)
    }
    else if(flag===3) 
    {
        span.innerHTML = arr[3]
        body.style.backgroundColor = arr[3]; 
        flag = 0
        console.log(flag)
    }
}) */