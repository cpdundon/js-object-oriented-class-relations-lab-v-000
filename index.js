
let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;

class Driver {
	constructor(name) {
		this.id = ++driverId;
		this.name = name;
		store.drivers.push(this);
	}

	trips() {
		return store.trips.filter (
			function (trip) {
				return (trip.driverId === this.id);
			}.bind(this)
		);
	}


	passengers () {
		const tps = this.trips();
		const pass = [];
		
		for (let t of tps) {
			pass.push(store.passengers.find(
				function (passenger) {return passenger.id === t.passengerId}	
			));
		}
		return pass;
	}
}

let passengerId = 0;

class Passenger {
	constructor(name) {
		this.id = ++passengerId;
		this.name = name;
		store.passengers.push(this);
	}

	trips() {
		return store.trips.filter (
			function (trip) {
				return (trip.passengerId === this.id);
			}.bind(this)
		);
	}


	drivers () {
		const tps = this.trips();
		const drive = [];
		
		for (let t of tps) {
			drive.push(store.drivers.find(
				function (driver) {return driver.id === t.driverId}	
			));
		}
		return drive;
	}
} 

let tripId = 0;

class Trip {
	constructor(driver, passenger) {
		this.id = ++tripId;
		store.trips.push(this);

		if (driver) {
			this.driverId = driver.id;
		}
		if (passenger) {
			this.passengerId = passenger.id;
		}
	}
	
	driver () {
		return store.drivers.find (
			function (driver) {
				return driver.id === this.driverId;
			}.bind(this)
		);	
	}

	passenger () {
		return store.passengers.find (
			function (passenger) {
				return passenger.id === this.passengerId;
			}.bind(this)
		);	
	}

} 


 
