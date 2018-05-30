const toggleMenu = () => {
  //  Toggle the "menu--open" class on your menu refence. 
	menu.classList.toggle("menu--open");
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click",function(e){
	 toggleMenu();
});

var headerLambda = document.getElementById("lambdaHeader");
TweenLite.to(headerLambda, 3, {color:"#0080ff"});

var headerColor = document.getElementsByClassName("header");
TweenLite.to(headerColor, 2, {backgroundColor:"#b3d9ff"});
