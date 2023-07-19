/** 
Functions:
-----------
 - Problems that functions solve
 - Creating a function
 - calling a function
 - parameters
 - return type
 - Scope
 - Build in functions
*/
//creating a function
function getNumb(){
	let age;
	do{
		age = parseInt(prompt("Enter your age: "))
	}while(isNaN(age));

	console.log(age);
}


getNumb()

// //
// let numb1;
// do{
// 	numb1 = parseInt(prompt("Enter the first number: "))
// }while(isNaN(numb1));

// let numb2;
// do{
// 	numb2 = parseInt(prompt("Enter the second number: "))
// }while(isNaN(numb2));

// answer = numb1 - numb2
// console.log(answer)