interface Vehicle {
    name:string,
    // year:number,
    year:Date, // can also be complex data
    broken:boolean,
    summary ():string ;  // function in interfaces
}

interface Reportable {
    summary ():string ;  // function in interfaces with a generic refactor i.e. without useless properties in the interface
}



const oldCivic = {
    name: 'civic',
    year:new Date(),
    broken:true,
    summary():string {
        return `Name is ${this.name}`
    }
}


const drink = {
    color:'brown',
    carbonated:true,
    sugar:40,
    summary():string {
        return `Drink has ${this.sugar}g sugar in it.`
    }
}

// now above 2 objects have same summary function 
// now if we see according to interface Reportable above both are of type Reportable



// classic annotation is very long

// const printVehicle = (vehicle: {name:string; year:number;broken:boolean}): void => {
const printVehicle = (vehicle: Reportable): void => {
// const printVehicle = (vehicle: Vehicle): void => {

    // console.log(`Name : ${vehicle.name}`);
    // console.log(`Year : ${vehicle.year}`);
    // console.log(`Broken : ${vehicle.broken}`);

    console.log(`Vehicle Summary : ${vehicle.summary()}`); 


}

printVehicle(oldCivic);

const printSummary = (item: Reportable): void => {
    console.log(`Function of Summary : ${item.summary()}`); 
}

printSummary(drink);
printSummary(oldCivic);

