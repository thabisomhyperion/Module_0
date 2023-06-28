/*
For Loop:
- Declaring a for Loop
- Solving a plus table using a for loop
- Using nested for loop to solve plust table
- Using for loop to draw a diagram.
Example of diagram
@ @ @ @ @ -> 5
@ @ @ @ -> 4
@ @ @	-> 3
@ @	-> 2
@	-> 1
*/

/*
1) Declaring a for Loop
for (initialization statement; stopping condition; iteration statement) {
	statement(s);
}
*/
// for(let i = 10; i >= 1; i--)
// 	{
// 		console.log(i);
// 	}

/*
2)  Solving a plus table using a for loop
1 + 2 = 3
2 + 2 = 4
3 + 2 = 5
...
*/

// let numb = parseInt(prompt("Enter a number: "))
// for (let i = 1; i <= 12; i++){
// 	console.log(String(i) + " +  " + String(numb) + " = " + String(i + numb))
// }

/*
3) Using nested for loop to solve plust table
*/
// for (let numb = 1; numb <= 3; numb++){
// 	for (let i = 1; i <= 12; i++){
// 		console.log(String(i) + " +  " + String(numb) + " = " + String(i + numb))
// 	}
// 	console.log("===========")
// }

/*
4) Using for loop to draw a diagram.
Example of diagram
@ @ @ @ @ -> 5
@ @ @ @ -> 4
@ @ @	-> 3
@ @	-> 2
@	-> 1
*/

for (let i = 5; i >= 1; i--){
	let charactor = "";
	for(let j = 1; j <= i; j++){
		charactor = charactor + "@ ";
	}
	console.log(charactor)
}

/*
let word = "mom"
let word2 = "mom"
*/