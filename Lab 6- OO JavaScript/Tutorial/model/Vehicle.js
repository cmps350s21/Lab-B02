class Vehicle{
    //attributes
    constructor(brand , horsePower){
        this.brand = brand
        this.horsePower = horsePower
    }
    getInsurance(){
        if(this.horsePower < 600) return 500
        else if(this.horsePower < 1000) return 1000
        else return 2000
    }
    displayVehicleInfo(){
        console.log(`
            Brand : ${this.brand}
            Horse Power : ${this.horsePower}
            Insurance : ${this.getInsurance()}
        `)
    }
}

module.exports =  Vehicle





//package.json
// a place where we put all our dependencies [JAVAFX]
// also we put the project configurations

// npm init

