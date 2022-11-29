# SENG 411 Project - Open Source Development
## Movie-Seat-Booking
This is a movie seat booking application ...

## Scope 
It i limted to 



## Software stack :computer:
We adopted the MEAN stack.

<pre>
M - MySQL

E - Express

A - Angular (excluded)

N - Node js
</pre>

## Tech stach :computer:
<ul> 
  <li>HTML</li>
  <li>CSS (Vanilla/Bootstrap)</li>
  <li>Javascript</li>
  <li>Jquery</li>
  <li>AJAX</li>
</ul>

## Features already present:
This project has the following capabilities already
1. Saving of selected seats across browser sessions.
2. Automatic selected seat count update.
3. Automatic selected seat price update.

## Functionalities and Features added :sparkles: :
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

## Screenshots of the system
 --insert screenshots --


## Instructions
1. Download thee project
2. Do this and that.

## Contributors :man_technologist: :woman_technologist: :man_technologist:
Crosslywire ( [Github](https://github.com/#) ) <br><br>
dtawusaku ( [Github](https://github.com/#) ) <br><br>
peter ( [Github](https://github.com/#) ) <br><br>
great ( [Github](https://github.com/#) ) <br><br>
source code ( [Github](https://github.com/#) ) <br><br>
toyio ( [Github](https://github.com/#) ) <br><br>


Made with love :heart:, pain :upside_down_face: and suffering :smiley: from Babcock University.
