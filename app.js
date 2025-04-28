var count = 0; // Initialize counter variable
var lastAction = ""; // Store the last action (for undo functionality)
var countSpan = document.getElementById('count');
var clickButton = document.getElementById('clickMe');
var decrementButton = document.getElementById('decrement');
var doubleIncrementButton = document.getElementById('doubleIncrement');
var resetButton = document.getElementById('reset');
var undoButton = document.getElementById('undo');
var setValueButton = document.getElementById('setValue');
var customValueInput = document.getElementById('customValue');
var message = document.getElementById('message');
// Load counter from local storage if available
var storedCount = localStorage.getItem('counter');
if (storedCount) {
    count = parseInt(storedCount, 10);
}
// Update the counter display and save to localStorage
function updateCounter() {
    count++;
    if (countSpan) {
        countSpan.textContent = count.toString();
        countSpan.style.transform = 'scale(1.2)'; // Apply scaling animation
        setTimeout(function () { return countSpan.style.transform = 'scale(1)'; }, 200); // Reset animation after a short delay
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
    }
    else {
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
    var customValue = parseInt(customValueInput.value);
    if (isNaN(customValue) || customValue < 0 || customValue > 1000) {
        displayMessage("Please enter a valid number between 0 and 1000.", 'error');
    }
    else {
        count = customValue;
        updateDisplay();
        lastAction = 'setValue';
        displayMessage("Counter set to custom value!");
    }
}
// Display a message for user feedback
function displayMessage(msg, type) {
    if (type === void 0) { type = 'success'; }
    if (message) {
        message.textContent = msg;
        message.style.display = 'block';
        message.style.color = type === 'error' ? 'red' : '#28a745';
        setTimeout(function () {
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
clickButton === null || clickButton === void 0 ? void 0 : clickButton.addEventListener('click', updateCounter);
decrementButton === null || decrementButton === void 0 ? void 0 : decrementButton.addEventListener('click', decrementCounter);
doubleIncrementButton === null || doubleIncrementButton === void 0 ? void 0 : doubleIncrementButton.addEventListener('click', doubleIncrementCounter);
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', resetCounter);
undoButton === null || undoButton === void 0 ? void 0 : undoButton.addEventListener('click', undoLastAction);
setValueButton === null || setValueButton === void 0 ? void 0 : setValueButton.addEventListener('click', setCustomValue);
// Initialize counter display
updateDisplay();
