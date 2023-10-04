const kmPirce = 0.21;
const under18Discount = 20 / 100;
const over65Discount = 40 / 100;
const domTicketPrice = document.getElementById("ticketPrice");
const euro = "&euro;";

function getPrice() {
  let ticketKm = parseFloat(document.getElementById("kilometers").value);
  let userAge = parseFloat(document.getElementById("age").value);

  if (!userAge || !ticketKm) {
    alert("Non puoi lasciare i campi vuoti o inserire del testo");
    return;
  }

  if (userAge <= 0 || ticketKm <= 0) {
    alert("Non puoi inserire numeri inferiori a 0");
    return;
  }

  let ticketPrice = ticketKm * kmPirce;

  if (userAge < 18) {
    ticketPrice = ticketKm * kmPirce - ticketKm * kmPirce * under18Discount;
  } else if (userAge > 65) {
    ticketPrice = ticketKm * kmPirce - ticketKm * kmPirce * over65Discount;
  }

  domTicketPrice.innerHTML = ticketPrice.toFixed(2) + euro; //
}
