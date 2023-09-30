let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = 80;
    // Math.ceil(Math.random() * 10000);

btn.onclick = function () {
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 100000) + 360-number;
}
console.log(number)
