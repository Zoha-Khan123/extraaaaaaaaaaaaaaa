// var number = parseInt(prompt("Enter any number from 1 to 100"));

// if (number >= 1 &&  number <= 10) {
//     console.log("Number is between 1 and 10");
// } else if (number >= 11 && number <= 100) {
//     console.log("Number is between from 11 and 100");
// } else {
//   console.log("Number is not between 1 and 100");
// }



// var number = parseInt(prompt("Enter any number from 1 to 100"));

// if((number >= 1 && number <= 10) || (number >= 91 && number <=100)){
//     console.log("Number is between 1 and 10 or 91 and 100");
// }else if(number >= 11 && number <= 90){
//     console.log("Number is between 11 and 90");
// }else{
//     console.log("Number is not between 1 and 100");

// }



// var number = parseInt(prompt("Enter any number from 1 to 100"));

// if((number >= 1 && number <= 10) || (number >= 91 && number <=100)){

//     if(number >= 1 && number <= 10){
//         console.log("Number is between 1 and 10");
//     }else{
//         console.log("Number is between 91-100");
//     }

// }else if(number >= 11 && number <= 90){
//     console.log("Number is between 11 and 90");
// }else{
//     if(number > 100){
//         console.log("Number is positive and greater than 100");
//     }else if (number < 0){
//         console.log("Number is negative");
//     }
//     else{
//         console.log("Number is zero");
//     }
// }



// var skill1 = prompt("Do you know html ? (yes / no)");

// if(skill1 === "yes"){
//     console.log("Good html ate ha");
//     var skill2 = prompt("Do you know css ? (yes / no)");
//     if(skill2 === "yes"){
//         console.log("Css ate ha ");
//         var skill3 = prompt("Do you know javascript ? (yes / no)");
//         if(skill3 === "yes"){
//             console.log("Congratulation! You are hired");
//         }else{
//             console.log("Javascript nahi ate");

//         }

//     }else{
//         console.log("Css nahi ate");

//     }

// }else{
//     console.log("Please learn html");

// }

// ============= EASY ===========
// var studentMarks = +prompt("Enter your marks")

// if(studentMarks >= 0 && studentMarks < 50){
//     console.log("You have failed");
// }else if (studentMarks >= 50 && studentMarks <= 100){
//     console.log("You have passed");
// }else{
//     console.log("Invalid input");

// }


// ============= Normal ============
// var age = +prompt("Enter your age");

// if(age >= 18){

//     var writtenTest = prompt("Pass the written test (yes/no)")
//     if(writtenTest === "yes"){
//         var drivingTest = prompt("Pass the driving test (yes/no)")
//         if(drivingTest === "yes"){
//             console.log("Congratulations! You are eligible for a driving license");

//         }else{
//             console.log("Please pass the driving test.");

//         }
//     }else{
//         console.log("Please pass the written test");

//     }
// }else{
//     console.log("Your age is below 18");

// }

// =========== Hard    ============
// var marks = +prompt("Enter your marks");

// if (marks >= 70) {
//   var entranceTest = +prompt("Enter entrance test marks");
//   if (entranceTest >= 75) {
//     var interviewStatus = prompt("Interview Status (pass/fail)");

//     if (interviewStatus === "pass") {
//       if (marks >= 90 && entranceTest >= 90) {
//         console.log("You got admission with scholarship!");
//       } else {
//         console.log("Congratulations! You are admitted");
//       }
//     } else {
//       console.log("You must pass the interview.");
//     }
//   } else {
//     console.log("You need at least 75 in the entrance test.");
//   }
// } else {
//   console.log("Minimum 70 marks required");
// }
