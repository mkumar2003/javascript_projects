const span = document.querySelector("span");
const btns = document.querySelectorAll("button");

let count = 0;

//use includes in case of id and contains in case of classnames do study diffrence between contains and includes
//
// In JavaScript, includes() and contains() are both methods used to check if a string contains another substring or 
//if an array contains a specific element. However, contains() is only used with arrays, while includes() is used with both arrays
// and strings. 

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.id;
        console.log(styles);
        if (styles.includes("inc")) {
            count++;
        } else if (styles.includes("dec")) {
            count--;
        }else {
            count = 0;
        }


        if(count>0){
            span.style.color = "green";
        }
        else if(count<0){
            span.style.color = "red";
        }
        else{
            span.style.color = "black"
        }
        span.innerHTML = count;
    });
});




























//non optimized classical approach

// const inc = document.querySelector("#inc");
// const dec = document.querySelector("#dec");
// const reset = document.querySelector("#reset");
// const span = document.querySelector("span")

// let timer = 0;

// const incrementCounter = () => {
//     timer = timer + 1;
//     span.innerHTML = timer;
// }

// const decrementCounter = () => {
//     if (timer>0) {
//       timer = timer - 1;
//     span.innerHTML = timer;  
//     }
// }

// const ResetCounter = () => {
//     timer = 0;
//     span.innerHTML = timer;
// }

// inc.addEventListener("click",incrementCounter);
// dec.addEventListener("click",decrementCounter);
// reset.addEventListener("click",ResetCounter);