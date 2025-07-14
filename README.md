# Interactive_Button_Click_Tracker
## Date:
## Objective:
To implement a counter using JavaScript closures and demonstrate how variables maintain their state across function calls, emphasizing the concepts of function scope and lexical closures.

## Tasks:

#### 1. Structure the HTML Layout:
Create a simple interface with:

A heading like ```<h1>ClickCounter</h1>```

A ```<button>``` labeled “Click Me”

A ```<p> or <div>``` to display the number of clicks

#### 2. Style with CSS:
Center the layout and apply padding and background color

Use large fonts for the click display

Add hover effects on the button

#### 3. Write JavaScript with Closure:
Create a function createCounter() that returns another function

The inner function should increment and return a count variable stored in the outer function’s scope

Use this closure to track how many times the button has been clicked

Update the DOM each time the button is clicked using the closure function
## HTML Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Button Tracker</title>
</head>
<body>
    <div class="container">
        <h1>ClickCounter</h1>
        <button id="clickbtn">Click Me</button>
        <p id="count">You have clicked: 0 times</p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 20px;
    font-size: 2.5em;
    color: #333;
}

button {
    padding: 15px 25px;
    font-size: 1.2em;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
}

button:hover {
    background-color: #45a049;
}

p {
    font-size: 1.5em;
    margin-top: 20px;
    color: #555;
}
```
## JavaScript Code:
```js
function createCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
}
const counter = createCounter();
const btn = document.getElementById('clickbtn');
const dis = document.getElementById('count');
btn.addEventListener('click', () => {
    const count = counter();
    dis.textContent = `You have clicked: ${count} times`;
});
```
## Output:
<img width="692" height="509" alt="image" src="https://github.com/user-attachments/assets/b07475dd-33c1-4ba4-ad35-4ee26274b183" />

## Result:
A mini module using JavaScript closure and scope is successfully implemented to build an interactive button click tracker that updates in real time without exposing internal variables.
