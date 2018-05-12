$(function() {

  // Model holds all the data that will be used
  let model = {
    // allCats is the data that is going to be used.
    // It is a property of model object, and the containing,
    // an array of objects
    allCats: [{
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
    }],
    // Model property that will hold the object of currently selected cat.
    // Setting the currentCat to default of  -> Jacky
    currentCat: {}
  };

  /* Octopus handle conversttion between modal and view.
   * Applys different methods called from view to the modal.
   */
  let octopus = {
    // Should render catList and displayArea from view
    init: function() {
      // Create catList html first.
      viewCatList.init();

      // Set the the default cat that should be displayed to the first one -> Jacky
      model.currentCat = model.allCats[0];

      // Then create the displayArea html.
      viewDisplayArea.init();
    },
    getAllCats: function(){
      // Return the model data to the view that is requesting it.
      return model.allCats;
    },
     // Return the current cat that is selected or the default.
    getCurrentCat: function(){
      return model.currentCat;
    }
  };

  // Rendering and initilisation of the catList view (HTML).
  let viewCatList = {
    // Build the HTML that will be rendered on the screen.
    init: function() {
      // Get the cat list that will hold the options with cats.
      // Add it as property to view -> viewCatList{ catList: $('.cat-list') };
      this.catList = $('.cat-list');

      // Display the views on the screen.
      viewCatList.render();
    },
    render: function() {
      // Empty string that will hold the html template that will be rendered
      let htmlString = '';

      // Create the catList HTML.
      octopus.getAllCats().forEach(function(catOption){
        // Build the HTML template.
        htmlString += '<button type="button">' + catOption.name + '</button>';
      });

      // Display the cats inside catList on the screen.
      this.catList.html(htmlString);
    }
  };

  // Rendering and initilisation of the displayArea view (HTML).
  let viewDisplayArea = {
    init: function() {
      // Get the displayArea that will hold the cats
      // Add it as property to view -> viewDisplayArea{ displayArea: $('.display-area') };
      this.displayArea = $('.display-area');

      // Display the view on the screen.
      viewDisplayArea.render();
    },
    render: function(){
      // Empty string that will hold the html template that will be rendered.
      let htmlString = '';

      // Get the current cat from the model and assign it to a variable
      let currentCat = octopus.getCurrentCat();

      // Build the HTML template.
      htmlString += '<div class="holder"><p class="name">'+ currentCat.name +'</p><img src="' + currentCat.imgSrc +'"><p class="counter">'+ currentCat.clicks +'</p></div>';

      // Display the selected cat ( HTML template) on the screen.
      this.displayArea.html(htmlString);
    }
  }

  /* First function that is called
   * and that should render the catList and the displayArea
   */
  octopus.init();
});

//
// /*
//  * Build the displayArea HTML structure:
//  * Create new div '.holder' and inside of it:
//  * <p class="name"> - cats name
//  * <img src=""> - cats image
//  * <p class="counter"> - counter for clicks
//  * eventListtener that will update the counter on click of the image
//  * display the '.holder' on the DOM
//  */
//
// // Create div class 'holder'
// const holder = document.createElement("div");
//
// // Add 'holder' class to the new div.
// holder.setAttribute('class', 'holder');
//
// // Inside holder create <p> that will hold the name.
// const name = document.createElement('p');
//
// // Add class 'name' to that <p>.
// name.setAttribute('class', 'name');
//
// // Add the name inside holder.
// holder.appendChild(name);
//
// // Create img element that will hold the image of cat.
// const imgCat = document.createElement('img');
//
// // Add the image inside holder.
// holder.appendChild(imgCat);
//
// // Create <p> that will hold the counter
// const counter = document.createElement('p');
//
// // Add class 'counter'.
// counter.setAttribute('class', 'counter');
//
// // Add the image inside holder.
// holder.appendChild(counter);
//
// // Display the '.holder' div on DOM.
// displayArea.appendChild(holder);
//
// /*
//  * Create new img with the image of the cat, and place it inside cat-list.
//  * Add event listener to that image to switch the cat displayed on the displayArea.
//  */
// for (let i = 0; i < allCats.length; i++) {
//   // Create <p> to display cat name on the '.cat-list'.
//   const catOption = document.createElement('button');
//
//   // Add the name of the cat to the cat option.
//   catOption.innerHTML = allCats[i].name;
//
//   // Display the cat option on the cat-list.
//   catList.appendChild(catOption);
//
//   // On click of a cat img display the cat on the display area.
//   catOption.addEventListener('click', function() {
//     // Change the index of currently selected cat.
//     currentCatIndex = i;
//
//     // Display the cat name.
//     name.innerHTML = allCats[i].name;
//
//     // Display the cat image.
//     imgCat.setAttribute('src', allCats[i].imgSrc);
//
//     // Display the number of clicks on the counter.
//     counter.innerHTML = allCats[i].clicks;
//   });
// }
//
// /*
//  * On click of cat image (displayed on display-area)
//  * increment the clicks of the currently selected cat,
//  * and display the clicks on counter
//  */
// imgCat.addEventListener('click', function() {
//
//   // Increment the clicks
//   allCats[currentCatIndex].clicks += 1;
//
//   // Display the clicks on the cat counter.
//   counter.innerHTML = allCats[currentCatIndex].clicks;
// });
