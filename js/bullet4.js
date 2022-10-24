//get DOM object representing scroll to top button
var scrollButton = document.getElementById("scrollToTop");
var halfHeight = document.body.scrollHeight/2;

function scrollFunction() {
    if (document.body.scrollTop > halfHeight || document.documentElement.scrollTop > halfHeight) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
}

//When the user scrolls halfway down from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

//Scroll to the top of the page when button is clicked
function topFunction() {
    //ensure compatibility with all browser types
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
scrollButton.addEventListener("click", topFunction);