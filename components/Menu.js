// This is the data we will be using, study it but don't change anything, yet.
function menuMaker(menuItem) {
  let menuList = document.createElement("div");
  let unorderedList = document.createElement("ul");
  let menuButton = document.querySelector(".menu-button");

  menuList.appendChild(unorderedList);

  menuList.classList.add("menu");

  menuItem.forEach((item) => {
    let menuItem = document.createElement("li");
    menuItem.textContent = item;
    unorderedList.appendChild(menuItem);
  });

  menuButton.addEventListener("click", () => {
    menuList.classList.toggle("menu--open");
  });

  return menuList;
}

let newMenu = menuMaker(menuItems);
let header = document.querySelector(".header");
header.appendChild(newMenu);
