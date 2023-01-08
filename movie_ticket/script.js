const  seatSelection =document.querySelectorAll('.golden_seats_row .seat:not(.occupied)');
const seatsMainContainer=document.querySelector('.seats_main_container')
const pickOneMovie=document.getElementById("pick_one_movie");
const total=document.getElementById('total');
const seatsCount=document.getElementById('count');
let ticketPrice = +pickOneMovie.value;
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("MovieIndex", movieIndex);
  localStorage.setItem("MoviePrice", moviePrice);
}
function selectedSeatCount() {
  const selectedSeats = document.querySelectorAll(".golden_seats_row .selected");

  seatsIndex = [...selectedSeats].map(function(seat) {
    return [...seatSelection].indexOf(seat);
  });

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  let selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.map(function(seat, index) {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}
pickOneMovie.addEventListener("change", function(e) {
  ticketPrice = +pickOneMovie.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  selectedSeatCount();
});
seatsMainContainer.addEventListener("click", function(e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    selectedSeatCount();
  }
});

selectedSeatCount();






