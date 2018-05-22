let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;


class Driver {
  constructor(id, name){
    this.id = id;
    this.name = name;
    this.id = driverId++;
    store.drivers.push(this);
  }
}

class Passenger {

}

class Trip {

}
