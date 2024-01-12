// example of function with annotation in an object
const profile = {
    name:'alex',
    age:20,
    coords : {
        lat:0,
        lng:15
    },

    setAge(age:number):void {
        this.age = age;
    }
}

// -------->  now es2015 destructuring

// const age = profile.age 
const {age}: {age:number}= profile

// const {coords:{lat, lng}} = profile
const {coords:{lat, lng}} : {coords :{lat:number, lng:number}}= profile

// we do this as what would we do if we had to destructure multipe properties from the object