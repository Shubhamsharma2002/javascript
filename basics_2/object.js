//decalaration of objects using object literals 

const details = {
       name: "shubhi",
       age:22,
       phone: 8081171862,
       email:"shubhmjii2002@gmail.com",
       address:"Noida Up"
}

// accessing the objects
// 1st way (mostly used to acess the value)
console.log(details.email);
// 2nd way 
console.log(details["age"]);

// freez the object 

Object.freeze(details);  // use freez the objects
