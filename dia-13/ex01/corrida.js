class Car {
  Name
  Power
  MaximumSpeed
  Acceleration

  constructor(name, power, maximumSpeed, acceleration) {
    this.Name = name;
    this.Power = power;
    this.MaximumSpeed = maximumSpeed;
    this.Acceleration = acceleration;
  }

  calculateAverageTime(distance) {
    let result = distance / (this.MaximumSpeed / this.Acceleration);
    return result;
  }
}

let firstCar = new Car("Ferrari", "400", "320", "5");

class Race {
  Name
  Type
  Distance
  Participants
  Winner 

  constructor(name, type, distance) {
    this.Name = name;
    this.Type = type;
    this.Distance = distance;
    this.Participants = [];
    this.Winner = "";
  }

  verifyingWinner() {
    let shorterTime = this.Participants[0].calculateAverageTime(this.distance);
    let winner = this.Participants[0];

    for (let i = 1; i < this.Participants.length; i++) {
      let time = this.Participants[i].calculateAverageTime(this.Distance);
      if (time < shorterTime) {
        shorterTime = time;
        winner = this.Participants[i];
      }
    }

    return this.Winner = winner;
  }

  displayWinner() {
    alert(`The winner is: ${this.winner.Name}`);
  }
}

let race = new Race("Race Car", "Stock Car", 9000);

race.Participants[0] = new Car("Amarok", 200, 300, 8);
race.Participants[1] = new Car("Kicks", 150, 250, 10);
race.Participants[2] = new Car("Ram", 400, 350, 5);

race.verifyingWinner();
race.displayWinner();