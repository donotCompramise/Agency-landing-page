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
 let seatsIndex = [...selectedSeats].map(function(seat) {
    return [...seatSelection].indexOf(seat);
  });
  // console.log(seatsIndex)


  
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  let selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
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