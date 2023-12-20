# Christmas-Lights

### Description:

The code is a simple web application that simulates blinking lights. It features a row of lights represented by circles (`<li>` elements) arranged horizontally. The lights can blink with three different colors (`animate1`, `animate2`, `animate3`). The application allows users to turn the lights on and off, change the blinking interval, and dynamically update the number of lights.

### Usage:

1. **Turn Lights On:**
   - Click the "On" button to start the blinking animation with the specified interval.

2. **Turn Lights Off:**
   - Click the "Off" button to stop the blinking animation and turn off all lights.

3. **Change Blinking Interval:**
   - Enter a new interval value (in seconds) in the "Interval (s)" input field.
   - Click the "Change Interval" button to apply the new interval for blinking.

4. **Change Number of Lights (Not Yet Implemented):**
   - The option to dynamically change the number of lights is included in the HTML (`<input type="number" id="numLights" ...>` and the associated button).
   - However, the functionality for changing the number of lights dynamically is not yet implemented in the provided code.

### Libraries Required:

The code doesn't require any external libraries. It uses basic HTML, CSS, and vanilla JavaScript to achieve the blinking lights simulation. The animations are done using CSS keyframes (`@keyframes`) to create the blinking effect.

### Code Structure:

1. **HTML (`index.html`):**
   - Defines the structure of the web page.
   - Includes a container for lights, control buttons, and an input field for changing the interval.

2. **CSS (`styles.css`):**
   - Styles the lights and provides animations for the blinking effect.
   - Defines the layout and appearance of the controls.

3. **JavaScript (`script.js`):**
   - Contains functions to handle turning the lights on/off, changing the blinking interval, and initializing the lights.
   - Dynamically generates lights based on user input (number of lights).
   - Uses intervals to toggle the animation classes and achieve the blinking effect.

### Notes:

- **Local Development:**
  Ensure you run the code on a local server or a server environment to handle certain features, especially when working with JavaScript imports.

### Roadmap

Even though the page is developed, there is room for improvement. An example would be: 

**Dynamic Number of Lights:**
The capability to dynamically change the number of lights is mentioned in the code but is not fully implemented. If you wish to add this feature, you can extend the JavaScript code to generate lights dynamically based on user input.

### Special thanks to: 

[Florin Pop](https://github.com/florinpop17/app-ideas) for inspiring the idea. for inspiring the idea.

For references on how to develop the CSS for the snowfall and the lights:
- [Snowfall](https://www.youtube.com/watch?v=TCEBh1kqFGA)
- [Lights](https://www.youtube.com/watch?v=Qi1Mb8vqe2U)

### Project Status:

Currently, the project is completed.
