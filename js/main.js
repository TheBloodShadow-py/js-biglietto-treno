const kmPirce = 0.21;
const under18Discount = 20 / 100;
const over65Discount = 40 / 100;
const ticketPrice = document.getElementById("ticketPrice");
const euro = "&euro;";

let ticketKm;
let userAge;

function getPrice() {
  let ticketKm = parseFloat(document.getElementById("kilometers").value);
  let userAge = parseFloat(document.getElementById("age").value);

  if (!userAge || !ticketKm) {
    alert("Non puoi lasciare i campi vuoti o inserire del testo");
    return false;
  }

  if (userAge < 18) {
    ticketPrice.innerHTML =
      (ticketKm * kmPirce - ticketKm * kmPirce * under18Discount).toFixed(2) +
      euro;
    return true;
  } else if (userAge > 65) {
    ticketPrice.innerHTML =
      (ticketKm * kmPirce - ticketKm * kmPirce * over65Discount).toFixed(2) +
      euro;
    return true;
  } else if (userAge < 65 && userAge > 18) {
    ticketPrice.innerHTML = (ticketKm * kmPirce).toFixed(2) + euro;
    return true;
  } else {
    ticketPrice.innerHTML = "Si è verificato un errore... riprovare";
    return false;
  }
}
