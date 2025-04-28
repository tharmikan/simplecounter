let count: number = 0; // Initialize counter variable
let lastAction: string = ""; // Store the last action (for undo functionality)
const countSpan = document.getElementById('count');
const clickButton = document.getElementById('clickMe');
const decrementButton = document.getElementById('decrement');
const doubleIncrementButton = document.getElementById('doubleIncrement');
const resetButton = document.getElementById('reset');
const undoButton = document.getElementById('undo');
const setValueButton = document.getElementById('setValue');
const customValueInput = document.getElementById('customValue') as HTMLInputElement;
const message = document.getElementById('message');

// Load counter from local storage if available
const storedCount = localStorage.getItem('counter');
if (storedCount) {
  count = parseInt(storedCount, 10);
}

// Update the counter display and save to localStorage
function updateCounter() {
  count++; 
  if (countSpan) {
    countSpan.textContent = count.toString();
    countSpan.style.transform = 'scale(1.2)'; // Apply scaling animation
    setTimeout(() => countSpan.style.transform = 'scale(1)', 200); // Reset animation after a short delay
  }
  localStorage.setItem('counter', count.toString());
  lastAction = 'increment';
  displayMessage("Counter increased!");
}

// Decrement the counter
function decrementCounter() {
  if (count > 0) {
    count--;
    updateDisplay();
    lastAction = 'decrement';
    displayMessage("Counter decreased!");
  } else {
    displayMessage("Cannot go below 0!", 'error');
  }
}

// Double the increment
function doubleIncrementCounter() {
  count += 2;
  updateDisplay();
  lastAction = 'doubleIncrement';
  displayMessage("Counter increased by 2!");
}

// Reset the counter
function resetCounter() {
  count = 0;
  updateDisplay();
  lastAction = 'reset';
  displayMessage("Counter reset!");
}

// Undo the last action
function undoLastAction() {
  switch (lastAction) {
    case 'increment':
      count--;
      break;
    case 'decrement':
      count++;
      break;
    case 'doubleIncrement':
      count -= 2;
      break;
    case 'reset':
      count = parseInt(localStorage.getItem('counter') || '0', 10);
      break;
  }
  updateDisplay();
  lastAction = 'undo';
  displayMessage("Last action undone!");
}

// Set custom value
function setCustomValue() {
  const customValue = parseInt(customValueInput.value);
  if (isNaN(customValue) || customValue < 0 || customValue > 1000) {
    displayMessage("Please enter a valid number between 0 and 1000.", 'error');
  } else {
    count = customValue;
    updateDisplay();
    lastAction = 'setValue';
    displayMessage("Counter set to custom value!");
  }
}

// Display a message for user feedback
function displayMessage(msg: string, type: 'error' | 'success' = 'success') {
  if (message) {
    message.textContent = msg;
    message.style.display = 'block';
    message.style.color = type === 'error' ? 'red' : '#28a745';
    setTimeout(() => {
      message.style.display = 'none';
    }, 2000);
  }
}

// Update counter display and localStorage
function updateDisplay() {
  if (countSpan) {
    countSpan.textContent = count.toString();
  }
  localStorage.setItem('counter', count.toString());
}

// Add event listeners
clickButton?.addEventListener('click', updateCounter);
decrementButton?.addEventListener('click', decrementCounter);
doubleIncrementButton?.addEventListener('click', doubleIncrementCounter);
resetButton?.addEventListener('click', resetCounter);
undoButton?.addEventListener('click', undoLastAction);
setValueButton?.addEventListener('click', setCustomValue);

// Initialize counter display
updateDisplay();
