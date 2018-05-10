// Get the cat list that will hold the options with cats.
const catList = document.querySelector('.cat-list');

// Get the displayArea that will hold the cats
const displayArea = document.querySelector('.display-area');

// Global variable that will hold the index of currently selected cat.
let currentCatIndex = 0;

// Holds the cats that will be displayed.
const allCats = [{
  name: 'Jacky',
  imgSrc: 'images//cat.jpg',
  clicks: 0
}, {
  name: 'Adam',
  imgSrc: 'images//adam.jpg',
  clicks: 0
}, {
  name: 'Bread',
  imgSrc: 'images//bread.jpg',
  clicks: 0
}, {
  name: 'Larry',
  imgSrc: 'images//larry.jpg',
  clicks: 0
}, {
  name: 'Spike',
  imgSrc: 'images//spike.jpg',
  clicks: 0
}];

/*
 * Build the displayArea HTML structure:
 * Create new div '.holder' and inside of it:
 * <p class="name"> - cats name
 * <img src=""> - cats image
 * <p class="counter"> - counter for clicks
 * eventListtener that will update the counter on click of the image
 * display the '.holder' on the DOM
 */

// Create div class 'holder'
const holder = document.createElement("div");

// Add 'holder' class to the new div.
holder.setAttribute('class', 'holder');

// Inside holder create <p> that will hold the name.
const name = document.createElement('p');

// Add class 'name' to that <p>.
name.setAttribute('class', 'name');

// Add the name inside holder.
holder.appendChild(name);

// Create img element that will hold the image of cat.
const imgCat = document.createElement('img');

// Add the image inside holder.
holder.appendChild(imgCat);

// Create <p> that will hold the counter
const counter = document.createElement('p');

// Add class 'counter'.
counter.setAttribute('class', 'counter');

// Add the image inside holder.
holder.appendChild(counter);

// Display the '.holder' div on DOM.
displayArea.appendChild(holder);

/*
 * Create new img with the image of the cat, and place it inside cat-list.
 * Add event listener to that image to switch the cat displayed on the displayArea.
 */
for (let i = 0; i < allCats.length; i++) {
  // Create img to display cat image on the '.cat-list'.
  const catOption = document.createElement('img');

  // Add the image of the cat to the cat option.
  catOption.setAttribute('src', allCats[i].imgSrc);

  // Display the cat option on the cat-list.
  catList.appendChild(catOption);

  // On click of a cat img display the cat on the display area.
  catOption.addEventListener('click', function() {
    // Change the index of currently selected cat.
    currentCatIndex = i;

    // Display the cat name.
    name.innerHTML = allCats[i].name;

    // Display the cat image.
    imgCat.setAttribute('src', allCats[i].imgSrc);

    // Display the number of clicks on the counter.
    counter.innerHTML = allCats[i].clicks;
  });
}

/*
 * On click of cat image (displayed on display-area)
 * increment the clicks of the currently selected cat,
 * and display the clicks on counter
 */
imgCat.addEventListener('click', function() {

  // Increment the clicks
  allCats[currentCatIndex].clicks += 1;

  // Display the clicks on the cat counter.
  counter.innerHTML = allCats[currentCatIndex].clicks;
});
