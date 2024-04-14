const buttons = document.querySelectorAll('.container');  //returns a NodeList containing all elements with the class 'container'
const body = document.body;

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (event) {
        switch (event.target.id) {
            case "grey":
                body.style.backgroundColor = "grey";
                break;
            case "white":
                body.style.backgroundColor = "white";
                body.style.color = "black"
                break;
            case "blue":
                body.style.backgroundColor = "blue";
                break;
            case "yellow":
                body.style.backgroundColor = "yellow";
                break;
        }
    });
});

//same logiv if implemented using else if
// console.log(chai.target)
    // if(chai.target.id === 'grey')
    // {
    //     body.style.backgroundColor = "grey"
    // }
    // else if(chai.target.id === 'white')
    // {
    //     body.style.backgroundColor = "white"
    //     body.style.color = "black"
    // }
    // else if(chai.target.id === 'blue')
    // {
    //     body.style.backgroundColor = "blue"
    // }
    // else if(chai.target.id === 'yellow')
    // {
    //     body.style.backgroundColor = "yellow"
    // }
    // })