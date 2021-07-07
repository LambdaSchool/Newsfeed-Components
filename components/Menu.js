// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
function growMenu() {
  gsap.to(".menu--open", {duration: 1, fontSize: "20px"});
}
function shrinkMenu() {
  gsap.to(".menu--close", {duration: 1, fontSize: "0px"});
}

function menuMaker(menuItems) {
  
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu";
    const menuList = document.createElement("ul");
    menuItems.forEach(item => {
      const menuItem = document.createElement("li");
      menuItem.innerText = item;
      menuList.append(menuItem);
    });
    menuContainer.append(menuList);
    const menuButton = document.querySelector(".menu-button");
    menuContainer.classList.toggle("menu--close");
    menuButton.style.width="10px";
    menuButton.style.height="10px";
    menuButton.style.backgroundColor="black";
    menuButton.addEventListener("click", () => {
      menuContainer.classList.toggle("menu--open");
      menuContainer.classList.toggle("menu--close");
      growMenu()
      shrinkMenu()
    })
    return menuContainer;
}

const menu = menuMaker(menuItems);
const header = document.querySelector(".header");
header.append(menu);

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
