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

function sendRequest() {
  fetch('https://grouping.onrender.com/exclude', {
    method: 'GET',
    headers: {
      'Authorization': 'Basic ' + btoa('guest:1234') // Base64 encode username:password
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// Set up interval to send the request every 10 seconds (10000 milliseconds)
setInterval(sendRequest, 10000);
