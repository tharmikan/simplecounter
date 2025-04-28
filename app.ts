// TypeScript Code for the Counter App

let count: number = 0; // Initialize counter variable

const countSpan = document.getElementById('count');
const clickButton = document.getElementById('clickMe');
const resetButton = document.getElementById('reset');

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
clickButton?.addEventListener('click', updateCounter);
resetButton?.addEventListener('click', resetCounter);
