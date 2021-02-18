const Vehicle = require('./Vehicle')
//import the class

class Bus extends Vehicle{
    constructor(brand , horsePower, numberOfPassengers){
        super(brand , horsePower)
        this.numberOfPassengers = numberOfPassengers
    }
}

// ctrl + ,