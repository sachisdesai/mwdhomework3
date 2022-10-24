//create an array of 15 random colors to randomly choose from
const colors = ['gray', 'blue', 'salmon', 'pink', 'cyan', 'green', 'yellow', 
                'lightpurple', 'pink', 'white', 'brown', 'lightblue', '', 
                'orange', 'teal'];

function randColor() {
    var ind = Math.floor(Math.random() * colors.length);
    return colors[ind];
}

//get DOM object representing the button
var choreo = document.getElementById('choreoText');
var choreoBox = document.getElementById('choreo');

function changeBackground() {choreoBox.style.background = randColor();}

//continues to change color every 3000 milliseconds 
function updateColorEvery3Seconds() {setInterval(changeBackground, 3000)}

//change background color on click
choreo.addEventListener("click", updateColorEvery3Seconds());