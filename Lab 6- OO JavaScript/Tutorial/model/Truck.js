const Vehicle = require('./Vehicle')
//import the class

class Truck extends Vehicle{
    constructor(brand , horsePower, load){
        super(brand , horsePower)
        this.load = load
    }
}

// ctrl + ,