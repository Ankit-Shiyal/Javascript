
// object usin Class

class Car {
    constructor(brand, model, price, color){
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.color = color;
    }
}

const car1 = new Car("Toyota", "Fortuner", 3500000, "Black")
console.log("Car 1:", car1)

const car2 = new Car("Hyundai", "Creta", 1500000, "White")
console.log("Car 2:", car2)

const car3 = new Car("Tata", "Nexon", 1200000, "Red")
console.log("Car 3:", car3)
