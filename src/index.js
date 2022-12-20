// Variable = is placeholder or basket where you put 
//            things.

// 1 - Variable name assign
// 2 - Give a variable a value

// Variable data type
// 1 - String
// 2 - Number
// 3 - boolean


/* let firstName = "Pinto";
let lastName = "Manuel";
let StudentAge  = 23;
let Enrolled = true; */

/* console.log("Student first name is ", typeof(firstName));
console.log("Student last name is ", typeof(lastName));
console.log("Student age is ", typeof(StudentAge));
console.log("Is this Student erolled? ", typeof(Enrolled));


document.getElementById("li1").innerHTML = "Student name is " + firstName;
document.getElementById("li2").innerHTML = "Student last name is " + lastName;
document.getElementById("li3").innerHTML = "Student age is " + StudentAge;
document.getElementById("li4").innerHTML = "Is this student Enrolled " + Enrolled; */



// Variable data type = Describe the type of data a variable can hold

// String
// Number
// boolean = true or false


let myName = "Pinto"
let age = "23";

age = Number(age)
age += 1;
let isItRain = false;


console.log(typeof (myName));
console.log(age);
console.log(typeof (isItRain));






/* Interested In */
let firstName;
let Surname;
let paymentVisa;
let paymentPaypal;


let btnSubmit = document.getElementById("submitButton").onclick = (event) => {
   event.preventDefault()
   firstName = document.getElementById("firstName").value;
   console.log(firstName);
   document.getElementById("lblFirstName").innerHTML = firstName;

   Surname = document.getElementById("lastName").value;
   console.log(Surname);
   document.getElementById("lblLastName").innerHTML = Surname;


   const paymentVisa = document.getElementById("paymentVisa")
   console.log("Payment Visa", paymentVisa);
   const paymentPaypal = document.getElementById("paymentPaypal")
   console.log("Payment Paypal", paymentPaypal);



   if (paymentVisa.checked) {
      document.getElementById("lblError").innerHTML = "You are paying with visa", paymentVisa;
      console.log("You are paying with visa");
   }
   else if (paymentPaypal.checked) {
      document.getElementById("lblError").innerHTML = "You are paying with paypal", paymentPaypal;
      console.log("You are paying with paypal");
   }
   else {
      document.getElementById("lblError").innerHTML = "Please select payment method"
      console.log("Please select payment method");
   }

}
