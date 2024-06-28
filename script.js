// Function to display the current date and time
function displayDate() {
    document.getElementById('demo').innerHTML = new Date();
}

// Function to change the background color randomly
function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFF333'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Function to change the content of the paragraph based on user input
function changeContent() {
    const userInput = document.getElementById('userInput').value;
    document.getElementById('contentDemo').innerHTML = userInput;
}
