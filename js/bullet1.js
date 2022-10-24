//get the DOM object representing this question card
var card1 = document.getElementById('cardText');

//when user hovers over the text with mouse, change question to the answer
card1.addEventListener("mouseover", 
    function(){ document.getElementById("learnMore").innerHTML = "Check out our social media pages and come to tryouts in early fall!";});

//when user moves mouse away from the text, change answer back to the question
card1.addEventListener("mouseout", 
    function(){ document.getElementById("learnMore").innerHTML = "How can I learn more about current positions on the Bhangra team?";}); 