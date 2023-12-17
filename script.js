const numRows = 7;
const circlesPerRow = 7;
const defaultInterval = 1000;
let intervalId;
let currentRow = 1;

function createCircle(row, index) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.backgroundColor = getRandomColor();
  circle.style.opacity = index === 0 ? '1' : '0.5';
  row.appendChild(circle);
}

function createRow(rowNum) {
  const row = document.createElement('div');
  row.classList.add('row');
  row.id = `row${rowNum}`;
  document.body.appendChild(row);

  for (let i = 0; i < circlesPerRow; i++) {
    createCircle(row, i);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function startStopDisplay() {
  if (intervalId) {
    clearInterval(intervalId);
    document.getElementById('startStopButton').textContent = 'Start';
  } else {
    intervalId = setInterval(updateDisplay, parseInt(document.getElementById('interval').value, 10));
    document.getElementById('startStopButton').textContent = 'Stop';
  }
}

function updateDisplay() {
  const currentRowElement = document.getElementById(`row${currentRow}`);
  const circles = currentRowElement.querySelectorAll('.circle');

  circles.forEach((circle, index) => {
    circle.style.opacity = index === 0 ? '1' : '0.5';
  });

  currentRow = (currentRow % numRows) + 1;
}

document.getElementById('startStopButton').addEventListener('click', startStopDisplay);
createRow(1);
