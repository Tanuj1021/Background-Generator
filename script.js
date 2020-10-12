var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function generateGradient() {
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")"; //memorise this syntax 

	css.textContent = body.style.background + ";";  //textContent helps to add the text in the tag selected using querySelector.
}


color1.addEventListener("input", generateGradient);   //addeventListener brings changes according to the type of change we want from the function. 

color2.addEventListener("input", generateGradient);