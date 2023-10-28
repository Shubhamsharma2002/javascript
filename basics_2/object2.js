// declare object using constructor or singleton

// singleton  way to decalre 


// const frindshub = new Object();




// non sigleton way to decelare  
  const frindshub = {};

 frindshub.id = "563567gffff"
 frindshub.name = "shubhi"
 frindshub.title = "SDE"

//  console.log(frindshub);


// example 2nd

const user = {
    email: "shubhamjii2002@gamil.com",
   fullname:{
    userfullname:{
        firstname:"shubham",
        lastname:"sharma"
    }
   }
}

// console.log(user.fullname.userfullname.);

// merge two object or combine

const obj1 = {1: "a", 2:"b"};
const obj2 = {3:"c" , 4 : "d"};
// 1st way to combine####################################
const obj3 = Object.assign(obj1,obj2);
// console.log("obj3:",obj3);
// 2nd way to combine #########################################
const obj4 = Object.assign({},obj1,obj2);
// console.log("obj4:",obj4);

// 3rd way to combine using spred operator
const obj5 = {...obj1,...obj2};
// console.log(obj5);


// Objects destructuring #################################################

const course = {
    coursename : "full stack dev",
    price : 6999,
    courseteacher :"shubham sharma"
}

// way to destructuring 

const { courseteacher : tech} = course;
// console.log(tech);



