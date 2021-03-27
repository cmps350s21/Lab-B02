export default class Pizza { //Thin Crust
    constructor (name, size, toppings)
    {
        this.name=name;
        if(size < 1 || size > 3)
            this.size=1;
        else
            this.size=size;
        this.toppings=toppings;
    }
    addTopping (topName){
        if (this.toppingCount < 5) //Max is 5 toppings
            this.toppings.push(topName);
    }
    get toppingCount(){
        return this.toppings.length;
    }
    get pizzaPrice(){
        //sm 10 , md= 13 , lrg=16
        //toppings 3 each
        let price=0;
        switch(this.size){
            case 1: price += 10 + ( 3 * this.toppingCount);
                break;
            case 2: price += 13 + ( 3 * this.toppingCount);
                break;
            case 3: price += 16 + ( 3 * this.toppingCount);
                break;
        }
        return price;
    }
    //Add printDetails
    get pizzaWeight(){
        let weight=0;
        switch(this.size){
            case 1: weight += 120;
                break;
            case 2: weight += 230;
                break;
            case 3: weight += 310;
                break;
        }
        return weight;
    }
    get pizzaCalories(){
        switch(this.size){
            case 1: return 180 + ( 10 * this.toppingCount);
            case 2: return 330 + ( 10 * this.toppingCount);
            case 3: return 410 + ( 10 * this.toppingCount);
        }
    }
    printDetails() {
        return `\nName: ${this.name}, Size: ${this.size}, Toppings: ${this.toppings}\nPrice: ${this.pizzaPrice}, Weight: ${this.pizzaWeight} Calories: ${this.pizzaCalories}`;
    }
}