
// Hotel Classes
class Hotel {
  Id
  Name
  Category
  Address
  Telephone

  constructor(id, name, category, address, telephone) {
    this.Id = id;
    this.Name = name;
    this.Category = category;
    this.Address = address;
    this.Telephone = telephone;
  }
}

// Reservation classes
class Reservation {
  Id
  IdHotel
  Responsible
  EntryDay
  ExitDay

  constructor(id, idHotel, responsible, entryDay, exitDay) {
    this.Id = id;
    this.IdHotel = idHotel;
    this.Responsible = responsible;
    this.EntryDay = entryDay;
    this.ExitDay = exitDay;
  }
}

let hotels = [];
let reservations = [];
let idHotel = 1;
let idReservation = 1;

function registerHotel() {
  let name = prompt("Enter a hotel name: ");
  let category = parseInt(prompt("Enter the hotel category: "));
  let address = prompt("Enter the hotel address: ");
  let telephone = prompt("Enther the hotel number: ");

  let hotel = new Hotel(name, category, address, telephone);
  idHotel++;
  hotels.push(hotel);
}

function registerReservation() {
  let idHotel;
  let exist = false;

  do {
    idHotel = parseInt(prompt("Enter the hotel id: "));
    for (let i = 0; i < hotels.length; i++) {
      if (idHotel == hotels[i].Id) {
        i = hotels.length;
        exist = true;
      } else if (i == hotels.length - 1) {
        console.log("Hotel ID not register");
      }
    }
  } while (!exist)

  let name = prompt("Enter the responsible name: ");
  let entryDay = parseInt(prompt("Enter the entry day: "));
  let exitDay;
  do {
    exitDay = parseInt(prompt("Enter the exit day: "));
    if (exitDay < entryDay) {
      console.log("The exit day should be more than entry day!")
    }
  } while (exitDay < entryDay)

  let reservation = new Reservation(idReservation, idHotel, name, entryDay, exitDay);
  idReservation++;
  reservations.push(reservation);
}

function lookReservationByHotel(idHotel) {
  reservations.forEach(reservation => {
    if (idHotel == reservation.IdHotel) {
      let i = idHotel - 1;
      console.log(`hotel: ${hotels[i].Name}`);
      console.log(`responsible: ${reservation.Responsible}`);
      console.log(`Entry Day: ${reservation.EntryDay}`);
      console.log(`Exit Day: ${reservation.ExitDay}`);
    }
  })
}

function lookHotelsByReservation(idReservation) {
  let idHotel = reservations[idReservation - 1].idHotel;
  console.log(`hotel: ${hotels[idHotel - 1].Name}`);
  console.log(`address: ${hotels[idHotel - 1].Address}`);
  console.log(`entry day: ${hotels[idHotel - 1].EntryDay}`);
  console.log(`exit day: ${hotels[idHotel - 1].ExitDay}`);
}

function lookReservationByName(name) {
  for (let i = 0; i < reservations.length; i++) {
    if (name == reservations[i].Responsible) {
      console.log(`Reservation id: ${reservations[i].Id}`);
      console.log(`hotel: ${hotels[reservations[i].IdHotel - 1].Name}`);
    }
  }
}

function lookHotelByCategory(category) {
  let hotelsSoughts = [];
  for (let i = 0; i < hotels.length; i++) {
    if (category == hotels[i].Category) {
      hotelsSoughts.push(hotels[i].Name);
    }
  }

  return hotelsSoughts;
}

function updatePhone(idHotel, telephone) {
  hotels[idHotel - 1].Telephone - telephone;
  console.log("Phone number updated!");
}

let continuing = true;
do {
  let option = parseInt(prompt("Choose a option: \n1 - Hotel register \n2 - Reservation register \n3 - Look reservation by hotel \n4 - Look hotel by reservation \n5- Look reservation by responsible \n6 - Look hotels by category \n7- Update hotel phone \n8 - Close program"));

  switch (option) {
    case 1:
      registerHotel();
      break;
    case 2:
      registerReservation();
      break;
    case 3:
      lookReservationByHotel(prompt("Enter the hotel id:"));
      break;
    case 4:
      lookHotelsByReservation("Enter the reservation id:");
      break;
    case 5:
      lookReservationByName("Enter the responsible name for reservation:");
      break;
    case 6:
      let hotelsSoughts = lookHotelByCategory(parseInt(prompt("Enter the wish category:")));
      console.log(hotelsSoughts);
      break;
    case 7:
      let idHotel = parseInt(prompt("Enter the hotel id that wish to update:"));
      let telephone = prompt("Enter the new phone number: ");
      updatePhone(idHotel,telephone);
      break;
    case 8:
      console.log("Finalized program");
      continuing = false;
      break;
    default:
      alert("Invalid option!");
      break;
  }
} while (continuing)
