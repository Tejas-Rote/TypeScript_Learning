const add = (a:number,b:number): number => {
    return a + b;
};

const sub = (a:number, b:number) => {
    a-b;
}
// as this did not have a return statment hence type inference shows 
// void as return type hence it is necessary to add return type as well

// keyword function
function divide(a:number, b:number) : number {
    return a/b;
}

// anonymous function
const mul = function(a:number, b:number):number {
    return a*b;
}

const logger = (msg:string):void => {
    console.log(msg)
}

// function with void return type can return null and undefined

const throwError = (msg:string):never =>{
    throw new Error(msg);
}
// never means we are never going to reach the end and we 
// will exit the function early after throwing the error 


const todayWeather = {
    date: new Date(),
    weather:'sunny'
};

const logWeather = (forecast: {date: Date; weather:string}) : void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

// with es2015 syntax destructuring 

const Weather = ({date, weather}: {date: Date; weather:string}) => {
    console.log(date);
    console.log(weather);

}

console.log(todayWeather);
