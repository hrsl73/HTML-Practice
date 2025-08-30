// Section switcher
function showSection(id){
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ===== Digital Clock with 12h/24h toggle =====
let is24Hour = false; // default 12-hour

function updateClock(){
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let timeString;
  if (is24Hour) {
    timeString = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  } else {
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    timeString = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')} ${meridiem}`;
  }

  document.getElementById('clock').textContent = timeString;
}

const formatToggle = document.getElementById('timeToggle');
const toggleLabel  = document.querySelector('.toggle-label');


formatToggle.addEventListener('change', () => {
  is24Hour = formatToggle.checked;
  toggleLabel.textContent = is24Hour ? '24-Hour Format' : '12-Hour Format';
  updateClock(); // refresh immediately on toggle
});

updateClock();
setInterval(updateClock, 1000);

// ===== Stopwatch =====
let stopwatchInterval = null;
let stopwatchTime = 0; // in milliseconds

function updateStopwatchDisplay(){
  const hours = Math.floor(stopwatchTime / 3600000);
  const minutes = Math.floor((stopwatchTime % 3600000) / 60000);
  const seconds = Math.floor((stopwatchTime % 60000) / 1000);
  const milliseconds = Math.floor((stopwatchTime % 1000) / 10); // two-digit ms

  document.getElementById('stopwatch').textContent =
    `${hours.toString().padStart(2,'0')}:` +
    `${minutes.toString().padStart(2,'0')}:` +
    `${seconds.toString().padStart(2,'0')}:` +
    `${milliseconds.toString().padStart(2,'0')}`;
}

function startStopwatch(){
  if (!stopwatchInterval){
    stopwatchInterval = setInterval(() => {
      stopwatchTime += 10; // increase by 10 ms
      updateStopwatchDisplay();
    }, 10); // run every 10 ms
  }
}

function stopStopwatch(){
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch(){
  stopStopwatch();
  stopwatchTime = 0;
  updateStopwatchDisplay();
}

// initialize display
updateStopwatchDisplay();

