// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  + The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  + Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  + Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  + Step 5: Don't forget to return your div.menu.

  + Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

//
const menuHeader = document.querySelector(".header");

//---Function---//
//Define the function, pass in array as parameter
function menuMakerFunction(arrayParam)
{
  //---Menu Button---//
  //Select the menu-button and assign to menuButton
  const menuButton = document.querySelector(".menu-button");
  

  //---Menu Div---//
  //Create div element, assign to menuDiv
  const menuDiv = document.createElement("div");
  //Append to the document
  menuButton.appendChild(menuDiv);
  //Add to menu class
  menuDiv.classList.add("menu");

  //---Menu List---//
  //Create "ul" element and assign to menuList
  const menuList = document.createElement("ul");
  //Append to the document
  menuDiv.appendChild(menuList);

   //ForEach to iterate the array
   arrayParam.forEach(element => 
    {
      //Create a list item element
      const arrayList = document.createElement("li");
      //Apply the text to the element
      arrayList.textContent = element;
      //Append to the doc
      menuList.appendChild(arrayList);
    });
    

  //---Menu button click event listener---//
  //Create click event listener, add to menuButton
  menuButton.addEventListener("click", function()
  {
    //Toggle article-open
    menuDiv.classList.toggle("menu--open");
  });


  //Function return statement
  return menuDiv;
}


//Call the function, pass in the menu items, append to doc
menuHeader.appendChild(menuMakerFunction(menuItems));

