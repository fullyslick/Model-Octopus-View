# Model Octopus View

This is a concept for professionally organising Java Script application. The code is seprarted into 3 general section, stored in variables.

- **Model** - holds the data that is going to be used by the JS application.
- **View** - holds the HTML or the interface that is going to be displayed on the screen.
- **Octopus** - connects **Model** & **View**. The idea of the octopus is to separate the the **Model** & **View**, so they do not interact directly with each other. For example when data has to be displayed on an interface, the **Octopus** delivers the data to the **View** where the data will be displayed. Or when the interface (**View**) must update the data (**Model**), a method on **Octopus** is called. This makes the code more readable, easier to upgrade and debug.

## Cat Clicker

This is just an example of applying the **Model View Octopus** approach. The main requirements of the app are:

**Visuals**

The application should display

- a list of cats by name
- an area to display the selected cat
- an admin button
- an admin area with inputs for changing the cat's name, url, and number of clicks (hidden by default)

In the cat display area, the following should be displayed

- the cat's name
- a picture of the cat
- text showing the number of clicks

The specifics of the layout do not matter, so style it however you'd like.

**Interaction**

- When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
- The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.
- When the admin button is clicked, the admin area should appear with the inputs filled in for the currently-selected cat.
- When the cancel button in the admin area is pressed, the admin area disappears.
- When the save button in the admin area is pressed, the currently-selected cat's values update with the values in the admin area, and the admin area disappears.

## Common Methods

- **_octopus.init()_** - the first method to be called when app is started. It is called outside of MOV. It usually calls view.init().
- **_view.init()_** - stores the HTML interface, creates HTML elements (the interface), assign event listeners.
- **_view.render()_** - visualizes data from the **Model** on the interface, and the interface on the screen.
- **_octopus.getSomeData(some criteria from View)_** - returns some data from the **Model** to the **View** (interface), depending on a criteria.
- **_octopus.setSomeData(inputs from View)_** - set some data in the **Model** taken from **View**.
- **_ocotopus.getAllData()_** - returns all data from the **Model** to the **View** (interface).
