const Vehicle = require('./Vehicle')

class Bus extends Vehicle{
    constructor(brand , horsePower, numberOfPassengers){
        super(brand , horsePower)
        this.numberOfPassengers = numberOfPassengers
    }

    badMethod(x){
        // 100 line code
        if(x < 10)
            return true;
        else
            return false;
    }
}

module.exports = Bus