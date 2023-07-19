/** 
Functions:
-----------
 - Problems that functions solve
 - Creating a function
 - calling a function
 - parameters > variable
 - return type
 - Scope
 - Build in functions
*/
//creating a function
function getNumb(msg){
	//the variable numb is local
	let numb;
	do{
		numb = parseInt(prompt(msg));
	}while(isNaN(numb));

	return numb;
}

function subtraction(){
	return numb1 - numb2;
}

//console.log(getNumb("Enter your age: "))
//the variable numb1 is global
let numb1 = getNumb("Enter the first number: ");

let numb2 = getNumb("Enter the second number: ");
console.log(subtraction())