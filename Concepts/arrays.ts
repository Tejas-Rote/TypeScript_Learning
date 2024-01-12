const carMaker:string[] = ['ford', 'toyota', 'chevy'];

// add annotaions for array if the array is initialized as an empty array like
const example:string[] = []
// else it will infere as any type which is bad

const dates = [new Date(), new Date() ]

// 2d arrays

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// or 
const CarsByMake:string[][] = [];

// helps with infernece when extracting values from the array
const car = carMaker[0];
const myCar = carMaker.pop();

// prevents incompatible values
    // carMaker.push(100); // will give error here as it will only accept string


    // help with map 
carMaker.map((car:string):string => {
    return car.toUpperCase();
})


// with arrays having multiple different type elements (Flexible types) 
const importantDate = [new Date(), '2030-10-10']

// or manual annotations
const ImportantDate :(Date|string)[] = [new Date()]
ImportantDate.push('2030-10-10') // means its flexible array 