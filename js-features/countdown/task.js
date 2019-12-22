function initializeClock( ) {
  const output = document.getElementById('timer');
  output.textContent -=1;

  if (output.textContent <= 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timeinterval);
  }
}

const timeinterval = setInterval(initializeClock, 1000);