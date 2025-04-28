// TypeScript Code for the Counter App
var count = 0; // Initialize counter variable
var countSpan = document.getElementById('count');
var clickButton = document.getElementById('clickMe');
var resetButton = document.getElementById('reset');
// Function to update the counter
function updateCounter() {
    count++; // Increase the counter by 1
    if (countSpan) {
        countSpan.textContent = count.toString(); // Update the displayed counter
    }
}
// Function to reset the counter
function resetCounter() {
    count = 0; // Reset the counter to 0
    if (countSpan) {
        countSpan.textContent = count.toString(); // Update the displayed counter to 0
    }
}
// Add event listeners to buttons
clickButton === null || clickButton === void 0 ? void 0 : clickButton.addEventListener('click', updateCounter);
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', resetCounter);
