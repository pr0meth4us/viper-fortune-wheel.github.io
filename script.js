let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let tokens = [
    ...Array(170).fill(240),
    ...Array(100).fill(160),
    ...Array(80).fill(200),
    ...Array(2).fill(320),
    280,
];
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
        let max = 720;

        container.style.transform = `rotate(${number}deg)`;

        number += Math.floor(Math.random() * 129600) * 360 + 360 + token;

        if (number >= max) {
            number = Math.floor(Math.random() * 129600) * 360 + 360 + token;
        }

        currentIndex++; // Move to the next token

        if (currentIndex === tokens.length && tokens[0] === 200) {
            currentIndex = 0; // Reset currentIndex after all tokens have been rotated
        }
        if (token !== 200) {
            btn.remove(); // Reset currentIndex after all tokens have been rotated

        }

    }
});
