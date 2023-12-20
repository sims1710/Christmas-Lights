let blinkInterval;

function onLights() {
  const lights = document.querySelectorAll('.light');
  lights.forEach((light, index) => {
    if (index % 3 === 0) {
      light.classList.add('animate1');
    } else if (index % 3 === 1) {
      light.classList.add('animate2');
    } else {
      light.classList.add('animate3');
    }
  });

  const interval = document.getElementById('interval').value * 1000;
  blinkInterval = setInterval(() => {
    lights.forEach((light, index) => {
      if (index % 3 === 0) {
        light.classList.toggle('animate1');
      } else if (index % 3 === 1) {
        light.classList.toggle('animate2');
      } else {
        light.classList.toggle('animate3');
      }
    });
  }, interval);
}

function offLights() {
  const lights = document.querySelectorAll('.light');
  lights.forEach((light) => {
    light.classList.remove('animate1', 'animate2', 'animate3');
  });

  // Clear the interval when turning off lights
  clearInterval(blinkInterval);
}

function changeInterval() {
  const intervalInput = document.getElementById('interval');
  const newInterval = intervalInput.value;
  clearInterval(blinkInterval); // Clear the existing interval
  onLights(); // Restart blinking with the new interval
}
