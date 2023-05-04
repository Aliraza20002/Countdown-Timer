let countdown;
let duration;
let alertSound = document.getElementById('alertSound');

function startTimer() {
  duration = document.getElementById('duration').value;
  if (!duration) {
    alert('Please enter a duration.');
    return;
  }
  duration *= 60; // Convert minutes to seconds
  countdown = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const minutes = Math.floor(duration / 60);
  let seconds = duration % 60;

  // Add leading zero to single-digit seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `${minutes}:${seconds}`;
  duration--;

  // Play alert sound and display custom message when time is up
  if (duration < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "Time's up!";
    alertSound.play();
    const alertMessage = prompt('Enter custom alert message:');
    if (alertMessage) {
      alert(alertMessage);
    }
  }
}
