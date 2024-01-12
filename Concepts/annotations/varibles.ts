let apples : number = 5;
// : number is type annotations and 
// it tells that apple will be assigned a number only not another data type like a string or a boolean


let speed : string = 'fast';
// if we assign different type like speed : string = 10 
// this will give error 

let nothing : null  = null;

// builtin objects
let now: Date = new Date();


// array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1,2,3];
let bools:boolean[] = [true, true , false];

// classes
class Car {

}
let car: Car = new Car();

// object literal
let point = {
    x:10,
    y:20
};

// now to add type annotations for the above we do it this way
let points:{x:number ; y:number;} = {
    x:10,
    y:20
}

//function
const logNumber = (i:number) => {
    console.log(i);
}
// to add type annotation for a function named logNumber is like this
const logNumbers: (i:number)=>void = (i:number) => {
    console.log(i);
}

// here :(i:number)=>void is annotation
// void is what type is the function is supposed to return

// when to use annotations
// 1. when function that returns the 'any' type

        const json = '{"x":10 , "y":20}';
        const coordinates = JSON.parse(json);
        console.log(coordinates); // {x:10 , y:20}
        
        // now the ts does not know its type so it says any , 
        // hence it can't find errros here

        // to fix this

        const coords: {x:number; y:number;} = JSON.parse(json);

// 2. when we declare a variable on one line and initialize it later

        let words = ['red', 'blue', 'green'];
        let foundWord:boolean; // without annotations it will say better add annotations

        for (let i=0;i<words.length;i++){
            if(words[i] == 'green'){
                foundWord = true;
            }
        }
// 3. when variable whoose type cannot be inferred correctly 
        
        let nums = [-10,-1,12];
        // let numAboveZero = false; // default 
        let numAboveZero:boolean | number = false;
        
        // this means that numAboveZero can either be boolean or number one of the 2
        

        for (let i=0;i<nums.length;i++){
            if(nums[i] > 0){
                numAboveZero = nums[i];
            }
        }

        // here we wanted that if we find such number then assign it 
        // else stay false but type inference did not understand that
        // to fix this we had to change the type annotation
