
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  alert('IT WORKS');
  console.log('Console works');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menuButton');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click',function(){
  
 this.toggleMenu(event);
})
