// Variable is a container for storing data
// A variable behave as if it was the value that it contains


//Two steps:
// 1 . Variable declaration (var, let const)
// 2 . Assignment ( = assignment operator)

let firstName = "Pinto";
let age = 35;
let softwareDev = true;

console.log("Your first name is", firstName, "your age is", age, "Your profession is", softwareDev);


/* 
  Arithmetic expression is a combination of...
  operands (values, variables, etc.)
  operators (+ - * / %) that can be evaluated to
  value of ex. y = x + 8
*/

let Numbers = 2

Numbers = Numbers + 20
console.log(Numbers);

Numbers = Numbers - 10
console.log(Numbers);

Numbers = Numbers * 2
console.log(Numbers);

Numbers = Numbers % 3
console.log(Numbers);


/* let result = (1 + 2) * (3 + 4)
console.log("result is:", result); */

let resultTwo = (2 - 378) % 20 + 30 - (4 * 2)
console.log("The result is:", resultTwo);



/* 
   How to accept user input in javascript

   1 . Easy way with a windows prompt
   2 . Difficult way Html textbox
*/

// Easy way 
//let usernameFirstName = window.prompt("Please enter first name")
//console.log(usernameFirstName);


// Difficult way
let userName;
let userSurname;
let userAge;
let userProfession;
let userEmail;
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

document.getElementById("btnSubmit").onclick = (values) => {
    userName = document.getElementById("textName").value;
    console.log(userName);
    document.getElementById("lblName").innerHTML = userName;

    userSurname = document.getElementById("txtSurname").value;
    console.log(userSurname);
    document.getElementById("lblSurname").innerHTML = userSurname;

    userAge = document.getElementById("txtAge").value;
    console.log(userAge);
    document.getElementById("lblAge").innerHTML = userAge;

    if (userAge >= 18) {
        document.getElementById("ageDisplay").innerHTML = "You are elegiable to play", userAge;
    } else {
        document.getElementById("ageDisplay").innerHTML = "Sorry you are not elegiable to play", userAge;
    }

    userProfession = document.getElementById("txtProfession").value;
    console.log(userProfession);
    document.getElementById("lblProfession").innerHTML = userProfession;

    userEmail = document.getElementById("txtEmail").value;
    console.log(userEmail);
    document.getElementById("lblEmail").innerHTML = userEmail;
    document.getElementById("lblDisplayEmail").innerHTML = userEmail;

    if (userEmail == regex) {
        document.getElementById("lblDisplayEmail").innerHTML = "Email provided is valid", userEmail;
    } else if (userEmail = regex.test(values.userEmail)) {
        document.getElementById("lblDisplayEmail").innerHTML = "This is not a valid email please try again", userEmail;
    }

    /* Payment check */
    const visaBtn = document.getElementById("visaPayment")
    const masterCardBtn = document.getElementById("masterCardPayment")
    const paypalBtn = document.getElementById("paypalPayment")


    if (visaBtn.checked) {
        console.log("You are paying with visa");
    }
    else if (masterCardBtn.checked) {
        console.log("You are paying with master card");
    }
    else if (paypalBtn.checked) {
        console.log("You are paying with paypal");
    }
    else {
        console.log("Please select payment method");
    }
}




//Type Conversion = change the datatype of a value to another
//                  (strings, number, booleans)


//let Myage = window.prompt("How hold are you?")
// To convert string to a number
/* console.log(typeof Number(Myage));
Myage = Number(Myage);
Myage += 1; */

//console.log("Happy Birthday! You are", Myage, "years old");



//Do while loop = do something
//        then check the condition,
//        repeat if condition is true


/* let userNames;

do{
    userNames = window.prompt("Enter your name")
}while (userNames == "") {
    console.log("Hello", userNames);
}
 */

// nested for loop = repeat some code a 
//          certain amount of times

for (let counter = 0; counter <= 34; counter+=1) {
    for (let j = 0; j <= 15; j+=1) {
        document.getElementById("counter").innerHTML = j
    }  
    document.getElementById("counter").innerHTML = counter  
}


// Function = define code once and use it anywhere

const StartProgram = () => {
    let userNameTwo = ""
    let ageTwo = ""
    happyBirthDay(userNameTwo, ageTwo)
}


const happyBirthDay = (userNameTwo, ageTwo) => {
    let greeting = window.prompt("Greeting for the heart")
    let inputName = window.prompt("What is your Name", userNameTwo)
    let inputAge = window.prompt("Your age is", ageTwo)
    console.log(greeting);
    console.log("Your name is",inputName);
    inputAge = Number(inputAge)    
    console.log("Your age is", inputAge);
}
StartProgram()
