// Get all catsImages, should return a NodeList.
const catsImg = document.querySelectorAll('.cat');

// Get all counters, should return a NodeList.
const counter = document.querySelectorAll('.counter');

// Get all cats names, should return a NodeList.
const catNames = document.querySelectorAll('.name');

// Constructor from which new cats will be made.
function Cats(name, catIndex) {
  this.name = name;
  this.catIndex = catIndex;
  this.clicks = 0;
}

// Method that add Click event listener to all cats that are created.
Cats.prototype.clickEvent = function() {

  // Stores the number of clicks for each cat.
  let clicks = this.clicks;

  // Stores the exact counter below this very cat.
  const catCounter = counter[this.catIndex];

  // Add click listenet for the cat.
  catsImg[this.catIndex].addEventListener('click', function() {

    // Increment the local variable clicks.
    clicks += 1;

    // Display the clicks on the counter of that cat.
    catCounter.innerHTML = clicks;
  });
}

// Method that will display the name of the cat above the image.
Cats.prototype.displayName = function() {

  catNames[this.catIndex].innerHTML = this.name;
}

// Create new cats
const jacky = new Cats("Jacky", 0);
const perry = new Cats("Perry", 1);

/* Call the methods on the new cats objects,
 * to display cats name and attach event listeners
 */
jacky.clickEvent();
jacky.displayName();

perry.clickEvent();
perry.displayName();
