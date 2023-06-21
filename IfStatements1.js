/*
if statements
if else statements
else statments

comparison operators: >, <, >=, <=, ==, ===, !=, &&, ||
output of comparison is true or false
*/
/*
Write a program that can grade student marks
mark greater that 75, display the message passed with distinction. mark greater that 50 but less than 75 , display passed. 
*/
let studMarks = Number(prompt("Enter student Mark: "))

// console.log(studMarks >= 75)
// console.log(studMarks >= 50)

if (studMarks >= 75) {
	console.log("Passed with distinction.");
}
else if (studMarks >= 50) {
	console.log("Passed");
}
else if (studMarks >= 40) {
	console.log("Supplementary exam");
}
else {
	console.log("Failed");
}

// if (studMarks >= 75){
// 	console.log("Passed with distinction.");
// }
// else if (studMarks < 75 && studMarks >= 50){
// 	console.log("Passed");
// }
// else if(studMarks < 50 && studMarks >= 40){
// 		console.log("Supplementary exam");
// }
// else{
// 	console.log("Failed");
// }