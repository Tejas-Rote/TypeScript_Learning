class Vehicle {
    // color:string ;
    // constructor(color:string) {
    //     this.color = color
    // }
            // or 
    constructor(public color:string) {}


    drive():void {
        console.log("driving");
    }

    protected honk(): void {
        console.log("beep");
    }
}

// we dont directly call methods defined using the above class generally 
// we use it to create an instance of a class

const vehicle = new Vehicle('green');              // this is the instance of the class

// now we access to all methods of the class with this instance 
vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);


// basic inheritance

class Car extends Vehicle {
    constructor(public wheels:number, color:string){ // we didn't add public before the color arg as we do not want to create an extra color varaible in car class
        super(color);                                // we must call the constructor of parent everytime we call constructor of the child class 
    }
     drive():void {                                  // overwritting the drive methods
        console.log("vroom");                        // while overwritting we can not change class modifiers like public, private and protected
    }
    startDrive():void {
        this.drive();                                // possilbe as its a private method and called by the same class method only
        this.honk();
    }
}

const car = new Car(4,'blue');
car.startDrive();
// car.honk();
console.log(`Color: ${car.color} & no.of wheels: ${car.wheels}`); // it will take constructor of parent class as deafult when creating an instance of a child class

