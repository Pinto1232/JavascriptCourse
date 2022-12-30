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
let myAge;


let btnSubmit = document.getElementById("submitButton").onclick = (event) => {
   event.preventDefault()
   firstName = document.getElementById("firstName").value;
   console.log(firstName);
   document.getElementById("lblFirstName").innerHTML = firstName;

   Surname = document.getElementById("lastName").value;
   console.log(Surname);
   document.getElementById("lblLastName").innerHTML = Surname;

   myAge = document.getElementById("yourAge").value;
   myAge = Number(myAge)
   myAge += 1;
   console.log(myAge);
   document.getElementById("lblAge").innerHTML = myAge;

   const paymentVisa = document.getElementById("paymentVisa")
   console.log("Payment Visa", paymentVisa);
   const paymentPaypal = document.getElementById("paymentPaypal")
   console.log("Payment Paypal", paymentPaypal);



   if (paymentVisa.checked) {
      document.getElementById("lblError").innerHTML = "You are paying with visa", paymentVisa;
      console.log("You are paying with visa");
   }
   if (paymentPaypal.checked) {
      document.getElementById("lblError").innerHTML = "You are paying with paypal", paymentPaypal;
      console.log("You are paying with paypal");
   }
  
   else {
      document.getElementById("lblError").innerHTML = "Please select payment method"
      console.log("Please select payment method");
   }
   if (myAge <= 18) {
      document.getElementById("lblError2").innerHTML = "Your age does not comply with requirement", myAge;
      console.log("Please insert a required age");
   }

}


//    Type Conversion

/* let myAges = window.prompt("How old are you?")
myAges = Number(myAges)
myAges += 1
console.log("My age is ", myAges);  */


/* Arrays */






const StudentCall = (e) => {
   console.log(e);
   const Students = [
      {
         id: 0,
         label: "Company",
         StudentName: "Pinto",
         StudentSurname: "Manuel",
         StudetnAge: "20",
         StudentCourse: "Information Technology",
         StudentNumberSubject: "12",
         StudentMarkAverage: "50",
         StudentPass: true,
         StudentFail: false,
         image: "./assets/car1.webp"
      },
      {
         id: 1,
         label: "Company",
         StudentName: "Mascode",
         StudentSurname: "Teresa",
         StudetnAge: "20",
         StudentCourse: "Information Technology",
         StudentNumberSubject: "12",
         StudentMarkAverage: "50",
         StudentPass: true,
         StudentFail: false,
         image: "./assets/car2.webp"
      },
      {
         id: 2,
         label: "Company",
         StudentName: "Owen",
         StudentSurname: "Stork",
         StudetnAge: "20",
         StudentCourse: "Information Technology",
         StudentNumberSubject: "12",
         StudentMarkAverage: "50",
         StudentPass: true,
         StudentFail: false,
         image: "./assets/car3.jpg"
      },
      {
         id: 3,
         label: "Company",
         StudentName: "Stef",
         StudentSurname: "Cock",
         StudetnAge: "20",
         StudentCourse: "Information Technology",
         StudentNumberSubject: "12",
         StudentMarkAverage: "50",
         StudentPass: true,
         StudentFail: false,
         image: "./assets/car4.jpg"
      },
      {
         id: 4,
         label: "Company",
         StudentName: "Adriano",
         StudentSurname: "Manuel",
         StudetnAge: "40",
         StudentCourse: "Information Technology",
         StudentNumberSubject: "12",
         StudentMarkAverage: "50",
         StudentPass: true,
         StudentFail: false,
         image: "./assets/car5.jpg"
      },
      {
         id: 5,
         label: "Company",
         StudentName: "Peter",
         StudentSurname: "Marcos",
         StudetnAge: "20",
         StudentCourse: "Information Technology",
         StudentNumberSubject: "12",
         StudentMarkAverage: "50",
         StudentPass: true,
         StudentFail: false,
      },
   ]

   let dataPrev = document.getElementById("prev-doc").innerHTML = JSON.stringify(Students, undefined, 2);
   console.log(Students);

   let html = "<table border='1|1'>"

   setTimeout(() => {
      for (let i = 0; i < Students.length; i++) {
         html += `<tbody>`
         html += `<tr>`
         html += '<td>' + Students[i].id + '</td>';
         html += '<td>' + Students[i].StudentName + '</td>';
         html += '<td>' + Students[i].StudentSurname + '</td>';
         html += '<td>' + Students[i].StudetnAge + '</td>';
         html += '<td>' + Students[i].StudentCourse + '</td>'
         html += '<td>' + Students[i].StudentNumberSubject + '</td>'
         html += `</tr>`
         html += `</tbody>`
      }
      document.getElementById("StudentNames").innerHTML = html
   }, 500)
}


const tableStudent = () => {
   const Students = [
      {
         id: 0,
         label: "Company",
         StudentName: "Pinto",
         StudentSurname: "Manuel",
         StudetnAge: "20",
         StudentCourse: "Information Technology",
         StudentNumberSubject: "12",
         StudentMarkAverage: "50",
         StudentPass: true,
         StudentFail: false,
         image: "./assets/car1.webp"
      },
      {
         id: 1,
         label: "Company",
         StudentName: "Mascode",
         StudentSurname: "Teresa",
         StudetnAge: "20",
         StudentCourse: "Information Technology",
         StudentNumberSubject: "12",
         StudentMarkAverage: "50",
         StudentPass: true,
         StudentFail: false,
         image: "./assets/car2.webp"
      },
      {
         id: 2,
         label: "Company",
         StudentName: "Owen",
         StudentSurname: "Stork",
         StudetnAge: "20",
         StudentCourse: "Information Technology",
         StudentNumberSubject: "12",
         StudentMarkAverage: "50",
         StudentPass: true,
         StudentFail: false,
         image: "./assets/car3.jpg"
      },
      {
         id: 3,
         label: "Company",
         StudentName: "Stef",
         StudentSurname: "Cock",
         StudetnAge: "20",
         StudentCourse: "Information Technology",
         StudentNumberSubject: "12",
         StudentMarkAverage: "50",
         StudentPass: true,
         StudentFail: false,
         image: "./assets/car4.jpg"
      },
      {
         id: 4,
         label: "Company",
         StudentName: "Adriano",
         StudentSurname: "Manuel",
         StudetnAge: "40",
         StudentCourse: "Information Technology",
         StudentNumberSubject: "12",
         StudentMarkAverage: "50",
         StudentPass: true,
         StudentFail: false,
         image: "./assets/car5.jpg"
      },
      {
         id: 5,
         label: "Company",
         StudentName: "Peter",
         StudentSurname: "Marcos",
         StudetnAge: "20",
         StudentCourse: "Information Technology",
         StudentNumberSubject: "12",
         StudentMarkAverage: "50",
         StudentPass: true,
         StudentFail: false,
      },
   ]

   let html = "<table>"

   setTimeout(() => {
      for (let i = 0; i < Students.length; i++) {
      html+= '<table>'
         html+= '<thead>'
           html+= '<tr>'
             html+= '<th>'+Students[i].label+'</th>'
           html+= '</tr>'
         html+= '</thead>'
         html+= '<tbody>'
           html+= '<tr>'
             html+= '<td data-column="First Name">'+Students[i].StudentName+'</td>'
           html+= '</tr>'
         html+= '</tbody>'
     html+= '</table>'

        }
        /* document.getElementById("blockA").innerHTML = html */
   }, 500)
}

StudentCall()
tableStudent()




