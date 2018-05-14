$(function() {

  /* =========== Model =========== */
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
    currentCat: {},

    // Holds the visibility state of admin panel.
    // By default panel is not visible.
    isAdminVisible: false
  };

  /* =========== Octopus =========== */
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

      // The init the admin panel.
      viewAdminPanel.init();
    },
    getAllCats: function() {
      // Return the model data to the view that is requesting it.
      return model.allCats;
    },
    // Return the current cat that is selected or the default.
    getCurrentCat: function() {
      return model.currentCat;
    },
    // Modifies the clicks property of the currentCat
    increaseClicks: function() {
      model.currentCat.clicks += 1;

      // Display the currently selected cat with the modified click property.
      viewDisplayArea.render();
    },
    // Changes the current cat and re-render it on the displayArea.
    changeCat: function(clickedCat) {
      model.currentCat = clickedCat;

      viewDisplayArea.render();
    },
    // Show admin panel.
    openAdminView: function(){
      // Change the visibility to true.
      model.isAdminVisible = true;

      // Change the visibility of the admin panel,
      // and pass the value of isAdminVisible from model.
      viewAdminPanel.changeVisibility(model.isAdminVisible);
    },
    // Hide admin panel.
    closeAdminView: function(){
      // Change the visibility to false.
      model.isAdminVisible = false;

      // Change the visibility of the admin panel,
      // and pass the value of isAdminVisible from model.
      viewAdminPanel.changeVisibility(model.isAdminVisible);
    }
  };

  /* =========== View =========== */
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
      /* Get all the cats from the model using octopus,
       * for each cat create a button,
       * and add eventListtener.
       */
      octopus.getAllCats().forEach(function(catOption) {
        // Create catButton DOM element and store it in variable.
        let catButton = $('<button type="button"></button>').text(catOption.name);

        // Assign click listener on every catButton that is created.
        catButton.click(function() {
          /* Call octupus method to change  the current cat,
           * and re-render it on the display area.
           */
          octopus.changeCat(catOption);
        });

        // Add the catButton to the HTML.
        viewCatList.catList.append(catButton);
      });
    }
  };

  // Rendering and initilisation of the displayArea view (HTML).
  let viewDisplayArea = {
    init: function() {
      // Get the nodes in the HTML that will be modified.
      this.name = $('.name');
      this.imgOfCat = $('img');
      this.counter = $('.counter');

      // Render the first cat.
      viewDisplayArea.render();

      // Assign event listener
      viewDisplayArea.addClickListener();
    },
    render: function() {

      // Get the current cat from the model and assign it to a variable
      let currentCat = octopus.getCurrentCat();

      // Display the name of the cat that is currently displayed.
      this.name.text(currentCat.name);

      // Display the img src of the currently displayed cat.
      this.imgOfCat.attr('src', currentCat.imgSrc);

      // Display the number of clicks of the currently displayed cat.
      this.counter.text(currentCat.clicks);
    },
    addClickListener: function() {
      /* Assign event listener on the cat image
       * and call the octupus to change the number of clicks
       * on the currently selected cat in the model
       */
      this.imgOfCat.click(function() {

        // Modify the currently selected cat 'clicks' property
        octopus.increaseClicks();
      });
    }
  };

  // Rendering and initilisation of the admin Panel view (HTML).
  let viewAdminPanel = {

    init: function() {
      /* Get the Admin button.
       * Get the form.
       * Get all the inputs from the form.
       * Get cancel btn from the form.
       */
      this.adminBtn = $('#admin-btn');

      this.form = $('#admin-form');

      this.inputName = $('#input-name');
      this.inputImgUrl = $('#input-imgUrl');
      this.inputClicks = $('#input-clicks');

      this.cancelBtn = $('#cancel-btn');

      // Show admin panel on click of admin btn.
      this.adminBtn.click(function(){
        octopus.openAdminView();
      });

      // Hide admin panel.
      this.cancelBtn.click(function(){
        octopus.closeAdminView();
      });
      
    },
    render: function() {
      // Get the current cat.
      let currentCat = octopus.getCurrentCat();

      // Display the name of the currentCat in the name input.
      this.inputName.val(currentCat.name);

      // Display the imgUrl of the currentCat in the imgUrl input.
      this.inputImgUrl.val(currentCat.imgSrc);

      // Display the clicks of the currentCat in the clicks input.
      this.inputClicks.val(currentCat.clicks);
    },
    // Changes the visibility of the form.
    changeVisibility: function(isPanelVisible) {

      if (isPanelVisible) {
        // Render the form.
        viewAdminPanel.render();

        // Display the form.
        this.form.attr('style', 'display: block');

      } else {
        // Hides the form.
        this.form.attr('style', 'display: none');
      }
    }
  };

  /* First function that is called
   * and that should render the catList and the displayArea
   */
  octopus.init();
});
