// Get the wrapper that will hold the cats
const wrapper = document.querySelector('.wrapper');

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

/* Create DOM new div '.holder' for every cat, that contains:
 * <p class="name"> - cats name
 * <img src="allCats[index].srcImg"> - cats image
 * <p class="counter"> - counter for clicks
 * eventListtener that will update the counter on click
 * display the '.holder' on the DOM
 */
for (let i = 0; i < allCats.length; i++) {

  // Create div class 'holder'
  const holder = document.createElement("div");

  // Add 'holder' class to the new div.
  holder.setAttribute('class', 'holder');

  // Inside holder create <p> that will hold the name.
  const name = document.createElement('p');

  // Add class 'name' to that <p>.
  name.setAttribute('class', 'name');

  // Place the name of the cat in that <p>.
  name.textContent = allCats[i].name;

  // Add the name inside holder.
  holder.appendChild(name);

  // Create img element that will hold the image of cat.
  const imgCat = document.createElement('img');

  // Add src attribute to add the jpg file to img tag.
  imgCat.setAttribute('src', allCats[i].imgSrc);

  // Add the image inside holder.
  holder.appendChild(imgCat);

  // Create local variable that will store the clicks.
  let clicks = 0;

  // Create <p> that will hold the counter
  const counter = document.createElement('p');

  // Add class 'counter'.
  counter.setAttribute('class', 'counter');

  // Set the default 0 number of clicks as inner txt.
  counter.textContent = clicks;

  // Add the image inside holder.
  holder.appendChild(counter);

  // Add click listener for the cat image.
  imgCat.addEventListener('click', function() {

    // Increment the clicks
    allCats[i].clicks += 1;

    // Display the clicks on the cat counter.
    counter.innerHTML = allCats[i].clicks;
  });

  // Display the '.holder' div on DOM.
  wrapper.appendChild(holder);
}
