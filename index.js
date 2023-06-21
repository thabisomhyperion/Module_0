/** 
More on While loop: 

1. prompt the user to enter positive numbers.
2. if the user enter a negative number , the loops ends
3. the negative number is not added to the accummulative sum
4. display the sum of valid numbers entered.
*/

let sum = 0;//global viriable and local variable
let number = parseInt(prompt('Enter a number:'));
do{
  sum += number
}
while( number >= 0);

console.log(`The sum is ${sum}`)

