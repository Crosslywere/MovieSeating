const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');//:not(.occupied)'); // Selects all seats regardless of if they are occupied.
const count = document.getElementById('count');
const price = document.getElementById('price');

const   movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }

  if (selectedMoviePrice !== null) {
    count.innerText = selectedSeats.length;
    price.innerText = selectedSeats.length * +selectedMoviePrice;
  }
};

populateUI();

selectedMovie = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
};

const updateSelectedSeatsCount = () => {
  const selectedSeats = document.querySelectorAll('.row .selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  price.innerText = selectedSeatsCount * ticketPrice;
};

// Seat select event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedSeatsCount();
  }
});

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  selectedMovie(e.target.selectedIndex, e.target.value);

  updateSelectedSeatsCount();
});

/********************************
 | ----Additional code here---- |
 |      Group 3 - SENG 411      |
 ********************************/

// Holds the string of the movie
let currentMovieSlug = '';
// This function sets the slug to whatever
const setMovieSlug = () => {
  currentMovieSlug = '';
  let movie = movieSelect.options[movieSelect.selectedIndex].text;
  movie = movie.slice(0, movie.lastIndexOf('$') - 1);
  movie = movie.trim();
  movie.replace(' ', '-');
  currentMovieSlug = movie;
}

const populateOccupiedSeats = () => {
  const occupiedSeats = JSON.parse(localStorage.getItem(currentMovieSlug + 'Occupied'));

  seats.forEach(seat => seat.classList.remove('occupied'));

  if (occupiedSeats != null && occupiedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (occupiedSeats.indexOf(index) > -1) {
        seat.classList.remove('selected');
        seat.classList.add('occupied');
      }
    });
  }
}

const purchaseSeats = () => {
  const selectedSeats = container.querySelectorAll('.seat.selected');
  selectedSeats.forEach(seat => {
    seat.classList.remove('selected');
    seat.classList.add('occupied');
  });
  const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  localStorage.setItem(currentMovieSlug + 'Occupied', JSON.stringify(seatIndex));
  updateSelectedSeatsCount();
}
// The reset function
const reset = () => {
  localStorage.removeItem(currentMovieSlug + 'Occupied');
  populateOccupiedSeats();
}
// Adding event listeners 
const purchaseBtn = document.querySelector('#purchase');
if (purchaseBtn != null) {
  purchaseBtn.addEventListener('click', purchaseSeats);
}

const resetBtn = document.querySelector('#reset');
if (resetBtn != null) {
  resetBtn.addEventListener('click', reset);
}

movieSelect.addEventListener('change', () => {
  setMovieSlug();
  populateOccupiedSeats();
});

setMovieSlug();

populateOccupiedSeats();