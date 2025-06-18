// CLOCK
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

// STOPWATCH
let stopwatchInterval;
let elapsedTime = 0;
let isRunning = false;

function formatTime(ms) {
  const total = Math.floor(ms / 1000);
  const hours = String(Math.floor(total / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
  const seconds = String(total % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateStopwatch() {
  document.getElementById("stopwatch").textContent = formatTime(elapsedTime);
}

function startStopwatch() {
  if (isRunning) return;
  isRunning = true;
  const startTime = Date.now() - elapsedTime;
  stopwatchInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateStopwatch();
  }, 500);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  elapsedTime = 0;
  isRunning = false;
  updateStopwatch();
  document.getElementById("beep").play(); // 🔔 play sound
}

// DARK MODE
const toggle = document.getElementById('toggleMode');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

