const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const item = document.querySelectorAll(".deadline-format h4")

// console.log(item);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);


const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${minutes}am`;

function calculateRemaining(){

    const currentTime = new Date();
    const t = futureDate - currentTime;
   
    //now we need to convert milliseconds into day , hour, minutes format
    //so calculate all values in milliseconds

 // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    const oneSecond = 1000;
    
    let dayLeft  = Math.floor(t / oneDay ); 
    
    let hourLeft = Math.floor((t%oneDay) / oneHour); 
    
    let minLeft = Math.floor((t%oneHour) / oneMinute); 
    
    let secLeft = Math.floor((t%oneMinute) / oneSecond);

    let values = [dayLeft,hourLeft,minLeft,secLeft];

    item.forEach(function(value,index){
        value.innerHTML = format(values[index]);
    })

    function format(item) {
        if (item < 10) {
          return (item = `0${item}`);
        }
        return item;
      }

    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`
    }
}

const countdown = setInterval(calculateRemaining,1000);

calculateRemaining();
