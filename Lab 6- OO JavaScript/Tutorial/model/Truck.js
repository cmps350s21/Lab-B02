const Vehicle = require('./Vehicle')

class Truck extends Vehicle{
    constructor(brand , horsePower, load){
        super(brand , horsePower)
        this.load = load
    }
}

module.exports = Truck