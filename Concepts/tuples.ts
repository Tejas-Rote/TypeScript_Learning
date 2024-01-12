// drink object
const drink = {
    color:'brown',
    carbonated:'true',
    sugar:40
}

// drink tuple

const pepsi  = ['brown', true, 40]
// ts here says its an array with multiple types
// hence need to fix this 

const cola : [string , boolean ,number] = ['brown', true, 40];
// now order stays same always and will show error we try to change it

// another way is to use
// ------------->  type alias


type Drink = [string, boolean , number];
// now we can reuse this type tuple structure 

const tea:Drink = ['brown', false, 10]

