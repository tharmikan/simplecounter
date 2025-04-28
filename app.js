var count = 0; // Initialize counter variable
var countSpan = document.getElementById('count');
var clickButton = document.getElementById('clickMe');
var resetButton = document.getElementById('reset');
var message = document.getElementById('message');
// Check if the counter value is stored in local storage
var storedCount = localStorage.getItem('counter');
if (storedCount) {
    count = parseInt(storedCount, 10); // Set counter value from localStorage
}
// Update the displayed counter
function updateCounter() {
    count++; // Increase the counter by 1
    if (countSpan) {
        countSpan.textContent = count.toString(); // Update the displayed counter
    }
    localStorage.setItem('counter', count.toString()); // Store the updated count in localStorage
    displayMessage("Counter increased!");
}
// Reset the counter
function resetCounter() {
    count = 0; // Reset the counter to 0
    if (countSpan) {
        countSpan.textContent = count.toString(); // Update the displayed counter to 0
    }
    localStorage.setItem('counter', count.toString()); // Update localStorage
    displayMessage("Counter reset!");
}
// Display a message for 2 seconds
function displayMessage(msg) {
    if (message) {
        message.textContent = msg;
        message.style.display = 'block';
        setTimeout(function () {
            message.style.display = 'none';
        }, 2000); // Hide the message after 2 seconds
    }
}
// Add event listeners to buttons
clickButton === null || clickButton === void 0 ? void 0 : clickButton.addEventListener('click', updateCounter);
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', resetCounter);
// Set the initial counter display
if (countSpan) {
    countSpan.textContent = count.toString();
}
