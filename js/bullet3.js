//get DOM object representing the card
var backgroundPic = document.getElementById('cardPicture');

//create a DOM image object that references the image, and set its properties
var img = new Image();
img.src = "images/cover3.jpeg";
img.width = 500;
img.height = 350;

//append the image as a child in the DOM tree
function changeBackground() {
    backgroundPic.innerHTML = '';
    backgroundPic.appendChild(img);
}

//remove the image child, then revert style back to original text
function revertBackground() {
    backgroundPic.removeChild(img);
    backgroundPic.innerHTML = 'Hover to view a competition photo from the past season!';
    backgroundPic.style.color = "cadetblue";
    backgroundPic.style.fontFamily = "Mukta";
    backgroundPic.style.fontSize = 'x-large';
}

backgroundPic.addEventListener("mouseover", changeBackground);
backgroundPic.addEventListener("mouseout", revertBackground); 
