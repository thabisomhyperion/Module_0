/*
Topics:
-------
- For loop and Arrays, including the break
- Trace diagram for nested for loop 
Example problem:
Hip!
Hip!
Hurray!!!
Hip!
Hip!
Hurray!!!
Hip!
Hip!
Hurray!!!

//For loop and Arrays, including the break
const STUDENT_NAMES = ["John", "Peter", "Lebo", "Joseph", "Marry", "student", "Steven", "Lebo"];
// for (let i = 0; i < STUDENT_NAMES.length; i++){
// 	console.log("Student Name: "+STUDENT_NAMES[i])
// }

//break
let stud_name = "Lebos"
let isnotfound = true
for (let i = 0; i < STUDENT_NAMES.length; i++){
	if(stud_name == STUDENT_NAMES[i]){
		console.log("The name is located on index "+ String(i))
		console.log("Student Name: "+STUDENT_NAMES[i])
		isnotfound = false;
		break;
	}
		
}
if (isnotfound){
			console.log("Name not found")
}
*/

//Trace diagram for nested for loop
for(let j = 0; j < 3; j++){
	for (let k = 0; k < 2; k++){
		console.log("Hip!");
	}
	console.log("Hurray!!!")
}
/*
line 41: j = 0, condition> true
line 42: j = 0, k = 0, condition> true
line 43: j = 0, k = 0, display> hip!
From line 43 -> back to line 42
line 42: j = 0, k = 1, condition> true
line 43: j = 0, k = 1, display> hip!
From line 43 -> back to line 42
line 42: j = 0, k = 2, condition> false
jump to line 45:
line 45: j = 0, display> Hurray!!!

from line 45, jump back to line 41
line 41: j = 1, condition> true
line 42: j = 1, k = 0, condition> true
line 43: j = 1, k = 0, display> hip!
From line 43 -> back to line 42
line 42: j = 1, k = 1, condition> true
line 43: j = 1, k = 1, display> hip!
line 42: j = 1, k = 2, condition> false
jump to line 45:
line 45: j = 1, display> Hurray!!!

from line 45, jump back to line 41
line 41: j = 2, condition> true
*/

