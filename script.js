let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let tokens = [
    ...Array(130).fill(240),
    ...Array(40).fill(0),
    ...Array(40).fill(69),
    ...Array(100).fill(160),
    ...Array(100).fill(200),
    ...Array(50).fill(17),
    ...Array(50).fill(570),
    ...Array(50).fill(19),
    ...Array(2).fill(320),
    280,
    80,
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

        if (currentIndex === tokens.length && tokens[0] === 200 && tokens[0] === 19&& tokens[0] === 17 && token !== 570) {
            currentIndex = 0; // Reset currentIndex after all tokens have been rotated
        }
        if (token !== 200 && token !== 19 && token !== 17 && token !== 570) {
            btn.remove(); // Reset currentIndex after all tokens have been rotated

        }
     

    }
});
// Define the base URL of your web application
const baseURL = 'https://grouping.onrender.com';

// Define the authentication credentials
const credentials = {
    user: { username: 'USERNAME', password: 'PASSWORD' },
    guest: { username: 'GUEST_USERNAME', password: 'GUEST_PASSWORD' },
    dev: { username: 'DEV_USERNAME', password: 'DEV_PASSWORD' },
};

// Function to send requests continuously
async function sendContinuousRequests() {
    try {
        // Adjust the endpoints and authentication details based on your use case

        // Example: Send a request to the homepage
        const response1 = await fetch(`${baseURL}/`);
        const data1 = await response1.json(); // Assuming the response is JSON, adjust accordingly
        console.log('Response 1:', response1.status, data1);

        // Example: Send a request to the list endpoint
        const response2 = await fetch(`${baseURL}/list`, {
            headers: {
                Authorization: `Basic ${btoa(`${credentials.user.username}:${credentials.user.password}`)}`,
            },
        });
        const data2 = await response2.json(); // Assuming the response is JSON, adjust accordingly
        console.log('Response 2:', response2.status, data2);

        // Example: Send a request to the addlist endpoint
        const response3 = await fetch(`${baseURL}/addlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(`${credentials.dev.username}:${credentials.dev.password}`)}`,
            },
            body: JSON.stringify([{ name: 'John Doe' }]),
        });
        const data3 = await response3.json(); // Assuming the response is JSON, adjust accordingly
        console.log('Response 3:', response3.status, data3);

        // Add more requests as needed

    } catch (error) {
        console.error('Error:', error.message);
    }

    // Repeat the function call after a delay (adjust as needed)
    setTimeout(sendContinuousRequests, 1000);
}

// Start sending requests continuously
sendContinuousRequests();
