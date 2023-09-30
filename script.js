let container = document.querySelector(".container");
let btn = document.getElementById("spin");

let number = 160 + Math.floor(Math.random() * 129600)*360;
let max = 720;
console.log("1", number);

btn.addEventListener("click", () => {
    container.style.transform = `rotate(${number}deg)`;

    number += (Math.floor(Math.random() * 129600))*360 + 360 - number;
    console.log("2", number);

    if(number >= max) {
        number =  (Math.floor(Math.random() * 129600))*360+  360 - number;
        console.log("3", number);

    }
});
