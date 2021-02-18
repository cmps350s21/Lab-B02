const Vehicle = require('./Vehicle')

class Bus extends Vehicle{
    constructor(brand , horsePower, numberOfPassengers){
        super(brand , horsePower)
        this.numberOfPassengers = numberOfPassengers
    }
}

module.exports = Bus