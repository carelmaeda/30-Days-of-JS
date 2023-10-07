const percentageInput = document.getElementById('percentageInput');
const progressCircle = document.querySelector('.progress-circle');
const progressText = document.querySelector('.progress-text');
const startButton = document.getElementById('startButton');

// Add an event listener to the "Enter" key press in the input field
percentageInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        updateProgressBar();
    }
});

startButton.addEventListener('click', updateProgressBar);

function updateProgressBar() {
    const percentage = parseFloat(percentageInput.value);
    if (isNaN(percentage)) return;

    const clampedPercentage = Math.min(100, Math.max(0, percentage));
    const progress = (clampedPercentage / 100) * 360; // Calculate the angle

    progressCircle.style.setProperty('--percentage', `${progress}deg`);
    progressText.textContent = `${clampedPercentage.toFixed(1)}%`;
}
