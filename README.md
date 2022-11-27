# SENG 411 Project
## Movie-Seat-Booking

### Features already present:
This project has the following capabilities already
1. Saving of selected seats across browser sessions.
2. Automatic selected seat count update.
3. Automatic selected seat price update.

### Features added:
* Setting of selected seats to occupied
    -
    A button on the HTML page is has its 'click' event listener set to the `purchaseSeats()` function. This sets the selected seat to occupied for the current movie selected.

* Saving the occupied across sessions
    - 
    This is done using the localStorage object provided by JavaScript. The movie title is used to generate a slug that is used to save the occupied seat for the current movie.

* Loading occupied seats for each movie after switching
    -
    An event listener, that calls the `setMovieSlug()` and `populateOccupiedSeats()` methods, when ever the field is changed. This causes the currentMovieSlug to be set to that of the current movie then uses the variable to get the occupied seats for that movie and populate the UI with them.

* Resetting seating
    -
    This is achieved by using the `removeItem()` method in the localStorage object. Because the localStorage is storing items for each movie seperately this resets for only the current movie selected.
