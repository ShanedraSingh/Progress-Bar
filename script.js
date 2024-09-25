const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");
const progressInput = document.querySelector("#progress-input");

// Function to dynamically change color based on progress value
function getColor(value) {
  if (value <= 25) return "#ff6b6b"; // Red for 0% to 25%
  if (value <= 50) return "#f7c964"; // Yellow for 26% to 50%
  if (value <= 75) return "#64f7c6"; // Green for 51% to 75%
  return "#648bf7"; // Blue for 76% to 100%
}

// Update progress based on input value
progressInput.addEventListener("input", () => {
  const value = progressInput.value;
  progressText.textContent = `${value}%`;
  setProgress(value);
});

// Function to update the circular progress bar and color
function setProgress(value) {
  const circumference = 2 * Math.PI * 60; // Circumference of the progress bar
  const offset = circumference - (value / 100) * circumference;
  progressBar.style.strokeDashoffset = offset;

  // Update the color of the progress bar
  progressBar.style.stroke = getColor(value);
}
