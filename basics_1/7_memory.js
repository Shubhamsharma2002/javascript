

// stack memory allocation
let email = "shubhamjii2002@gmail.com";

let secondemail = email;

secondemail = "shubamtech004@gmail.com";

console.log(secondemail);
console.log(email);


// heap memory allocation

let userone = {
    email: "shubhamjii2002@gmil.com",

    upi:"user@oksbi"
}

let usertwo = userone;

usertwo.email = "shubhamtech004@gmil.com";
console.log(userone.email);
console.log(usertwo.email);