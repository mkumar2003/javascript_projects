const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

const forward = document.querySelector("#forward")
const backward = document.querySelector("#backward")
let random = document.querySelector("#random")


const img = document.querySelector("img")
const name = document.querySelector("h3")
const position = document.querySelector("#rank")
const desc = document.querySelector("#desc")

let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    position.textContent = item.job;
    desc.textContent = item.text;
  });


// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    name.textContent = item.name;
    position.textContent = item.job;
    desc.textContent = item.text;
  }


  const btns = document.querySelectorAll("button")
  console.log(btns)


btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
      const spc =   e.currentTarget.id

      if (spc.includes("forward")) {
        currentItem++;
        if (currentItem > reviews.length-1) {
          currentItem = 0;
        }
        showPerson(currentItem);
      }else if(spc.includes("backward")){
        currentItem--;
        if(currentItem < 0){
          currentItem = reviews.length-1
        }
        showPerson(currentItem);
      }else{
        currentItem = Math.floor(Math.random() * reviews.length);
        showPerson(currentItem);
      }
      
    })
})


  // show next person
//   forward.addEventListener('click', function () {
//     currentItem++;
//     if (currentItem > reviews.length - 1) {
//       currentItem = 0;
//     }
//     showPerson(currentItem);
//   });

//   backward.addEventListener('click', function () {
//     currentItem--;
//     if (currentItem < 0) {
//         currentItem = reviews.length - 1;
//       }
//       showPerson(currentItem);
    
//   });

//   // show random person
// random.addEventListener('click', function () {

  
//     currentItem = Math.floor(Math.random() * reviews.length);
//     showPerson(currentItem);
//   });