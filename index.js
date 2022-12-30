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

/* for (let counter = 0; counter <= 34; counter += 1) {
    for (let j = 0; j <= 15; j += 1) {
        document.getElementById("counter").innerHTML = j
    }
    document.getElementById("counter").innerHTML = counter
} */


// Function = define code once and use it anywhere

const StartProgram = () => {
    let userNameTwo = ""
    let ageTwo = ""
    happyBirthDay(userNameTwo, ageTwo)
}


const happyBirthDay = (userNameTwo, ageTwo) => {
    /*  let greeting = window.prompt("Greeting for the heart")
     let inputName = window.prompt("What is your Name", userNameTwo)
     let inputAge = window.prompt("Your age is", ageTwo)
     console.log(greeting);
     console.log("Your name is",inputName);
     inputAge = Number(inputAge)    
     console.log("Your age is", inputAge); */
}
StartProgram()


// return = returns a value back to place
//           where you invoked a function


/* let area;
let width;
let height;


width = window.prompt("Enter width")
height = window.prompt("Enter height")

const getArea = (width, height) => {
    let result = width * height
    return result
}

area = getArea(width, height)
console.log("The area is ", area); */



// Playing with variables

let myFirstname = "Pinto";
let myLastName = "Manue";
let myAge = 35;
let Enrolled = false;

console.log("My firstname is", myFirstname);
console.log("My Lastname is", myLastName);
console.log("My Age is", myAge);
console.log("This student is", Enrolled);

/* document.getElementById("p1").innerHTML = "Your First name is " + myFirstname

 */




/* Guesses 2 */

let temp2 = 45;
document.getElementById("SubmitGuessBtn2").onclick = (e) => {
    e.preventDefault()
    console.log(e.target);

    let temp2;

    if (document.getElementById("cButton2").checked) {
        temp2 = document.getElementById("txtGuesses2").value;
        temp2 = Number(temp2)
        temp2 = convCelcius(temp2)
        document.getElementById("guess2").innerHTML = "Tempture is " + temp2 + ""
        console.log(temp2);
    }
    else if (document.getElementById("fButton2").checked) {
        temp2 = document.getElementById("txtGuesses2").value;
        temp2 = Number(temp2)
        temp2 = convFahrenheit(temp2)
        document.getElementById("guess2").innerHTML = "Tempture is " + temp2 + " F"
        console.log(temp2);
    }
    else {
        document.getElementById("guess3").innerHTML = "Please select a # from 0 to 10"
    }
}

const convCelcius = (temp2) => {
    return (temp2 - 9) * (5 / 32)
}

const convFahrenheit = (temp2) => {
    return temp2 * 9 / 5 + 32;
}



// If statement - Is use in programming to make descision

let myTemp = 20
let isItAGoodWheather = true


if(myTemp == 20){
    console.log("The wheather is good");
}
else if (myTemp == 0) {
    console.log("It's very cold");
}
else if(isItAGoodWheather){
    console.log("Is not a good wheather - You can't go outside");
}
else{
    console.log("Bad decision to go outside");
}






// Arrays - Is used to store multiple value

const Fruits = ["Banana", "Orange", "Avocado", "Peach", "Mango", "Apple"]
Fruits.pop("Banana")
console.log(Fruits);

/* const myNumber = [0, 100, 2, 200, 300, 1000, 1020]
console.log(myNumber.length);
 */

/* Switch case - Is used to make multiple decision  */


let myGrade = 60;

switch (true) {
    case myGrade >= 90:
        console.log("You pass with a greater mark");
        break;
    case myGrade >= 80:
        console.log("You pass with a slight greater mark");
        break;
    case myGrade >= 70:
        console.log("You pass with base mark");
        break;
    case myGrade >= 60:
        console.log("You failed");
        break;
    default:
     console.log("Please try again next year!");
        break;
}


// If Statement - Is used in programming to make decision

let myTemp2 = -20

if (myTemp2 == 20) {
    console.log("The wheather is good outside");
}
else if (myTemp2 == 10) {
    console.log("The wheather is cold outside");
}
else{
    console.log("You can not go outside");
}



// Continue chat about arrays - Methods

const animals = ['Pigs', 'Cows', 'Sheep', 'Eagle', 'Monkeys']
console.log(animals);


// Push
/* const animal = animals.push('Leon', 'Leopard') */
/* console.log(animal);

console.log(animals); */

// Pop
/* let animal = animals.pop()
console.log(animal); */

// Shift
/* let animal = animals.shift()
console.log(animal); */


// unshift

const animalName = animals.unshift('1', '2', 3, '4', 5)
/* console.log(animalName);

console.log(animals);  */

/* animals.forEach(element => {
    console.log(element);
}); */

/* for (let i = 0; i < animals.length; i++) {
    const lblElement = animals[i];
    console.log(lblElement);
} */


/* for (const animal of animals) {
    console.log(animal);
} */

console.log(animals);

let temps = 28
let sunny = false

if (temps > 0 && temps < 30) {
    console.log("The weather is good!");
} else {
    console.log("The weather is bad!");
}
if (sunny) {
    console.log('Its sunny outside');
}
else{
    console.log('Its cloudy outside');
}


/* function showSearchBar() {
    const searchBar = document.getElementById("search-bar");
    searchBar.classList.remove("hidden");
  }

  const hideButton = document.getElementById("hide-button");
  hideButton.addEventListener("click", function() {
    searchBar.classList.add("hidden");
  }); */



// Get the navbar
const navbar = document.querySelector('nav');

// Create the hamburger menu button
const hamburgerButton = document.createElement('button');
hamburgerButton.innerHTML = '<i class="fas fa-bars"></i>';

// Add the hamburger menu button to the navbar
navbar.appendChild(hamburgerButton);

// Add an event listener to the hamburger menu button
hamburgerButton.addEventListener('click', () => {
  // Toggle the dropdown menu
  navbar.querySelector('ul').classList.toggle('

