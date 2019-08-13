/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
	"Students",
	"Faculty",
	"What's New",
	"Tech Trends",
	"Music",
	"Log Out",
];
/**Creates a MenuComponent
 * displaying menu options on hamburgerbutton click.
 *  The options are formed as listItems in an unordered List.
 *ListItems are created from 'arr' ,the argument provided to createMenuComponent(arr).*/
const createMenuComponent = (arr) => {
	/**menu.setAttribute('class','className')===menu.classList.add('classList') */
	const menu = document.createElement("DIV");

	menu.setAttribute("class", "menu");

	const menuList = document.createElement("UL");

	menu.appendChild(menuList);

	arr.forEach((i) => {
		let listItem = document.createElement("li");

		listItem.textContent = i;

		menuList.appendChild(listItem);

		console.log("menuList:", menuList);
	});

	const toggleMenu = () => {
		menu.classList.toggle("menu--open");

		console.log(menu.classList);
	};

	const menuButton = document.querySelector(".menu-button");

	menuButton.addEventListener("click", toggleMenu);

	console.log("menu =>:", menu);

	document.body.appendChild(menu);
};
createMenuComponent(menuItems);

/* 
/* 
/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
