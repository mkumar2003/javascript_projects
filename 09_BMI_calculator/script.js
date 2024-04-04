const form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents default actions like submission of forms

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi<18.5) {
            results.innerHTML = `You are Under-weight(kuuposhit) : ${bmi}`
        }
        else if(bmi>18.5 && bmi<25){
            results.innerHTML = `You are Having Healthy weight : ${bmi}`
        }
        else if(bmi>25 && bmi<30){
            results.innerHTML = `You are Over-weight(do exercise) : ${bmi}`
        }
        else if(bmi>30){
            results.innerHTML = `!!!!You are Severly Overweight(Mar jaa Bhenchod laude!!!!!!!!!) : ${bmi}`
        }
    }
});
