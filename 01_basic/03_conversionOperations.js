let age = 40

// console.log(age);
// console.log(typeof(age));

age = String(age);
console.log(age);
console.log(typeof(age));

let isLoggedIn = true // it can be converted to 1 on number conversion
// on converting empty string into boolean it gets false

let numIsLoggedIn = Number(isLoggedIn)
console.log(numIsLoggedIn);

// NaN => not a number is assigned when a string that cannot be converted to number is converted to number
let name = "123vikrant"

let numName = Number(name)
console.log(numName);

// undefined => undefined is also gets converted into NaN
let sid = undefined

let numsid = Number(sid)
console.log(numsid);

// when null is converted into number is converts into 0
let sname = null;
let numSname = Number(sname);
console.log(numSname);
