const Bus = require('./model/Bus');
const Truck = require('./model/Truck');
const ShowRoom = require('./model/ShowRoom');

//create object of a bus
let bus = new Bus('Toyota XZ125' , 1200 , 50);

let vehicles = [
    new Bus('Toyota XZ125' , 1200 , 50),
    new Bus('Toyota XZ125' , 1200 , 50),
    new Truck('Toyota XZ125' , 1200 , 10200),
    new Truck('Toyota XZ125' , 1200 , 53000),
]
let serialized = JSON.stringify(vehicles)
console.log(serialized)

let deserialized = JSON.parse(serialized)

console.log(JSON.parse(deserialized))