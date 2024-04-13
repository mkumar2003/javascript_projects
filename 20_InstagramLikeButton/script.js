var con = document.querySelector("#container");
var icon = document.querySelector("#container i");
console.log(icon);

icon.addEventListener("dblclick", function () {
    console.log("double click done");
    icon.style.transform = "translate(-50%, -50%) scale(2)";
    icon.style.opacity = 0.8;

    setTimeout(function () {
        icon.style.opacity = 0;
    }, 1000);

    setTimeout(function () {
        icon.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000);
});
