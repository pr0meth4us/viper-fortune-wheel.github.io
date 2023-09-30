let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let tokens = [240, 160, 200, 40, 80, 120, 280, 320];
let currentIndex = 0;

// Function to shuffle the tokens array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

btn.addEventListener("click", () => {
    if (currentIndex === 0) {
        shuffleArray(tokens); // Shuffle tokens when starting a new rotation
    }

    if (currentIndex < tokens.length) {
        let token = tokens[currentIndex];
        let number = token + Math.floor(Math.random() * 129600) * 360 + 360 + token;
        console.log("0", token);
        let max = 720;
        console.log("1", number);

        container.style.transform = `rotate(${number}deg)`;

        number += Math.floor(Math.random() * 129600) * 360 + 360 + token;
        console.log("2", number);

        if (number >= max) {
            number = Math.floor(Math.random() * 129600) * 360 + 360 + token;
            console.log("3", number);
        }

        currentIndex++; // Move to the next token

        if (currentIndex === tokens.length) {
            currentIndex = 0; // Reset currentIndex after all tokens have been rotated
        }
    }
});
