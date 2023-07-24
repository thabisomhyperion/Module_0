/**
String handling
*/
let ourString= "Helo Hello World!"

//let str1 = ["H","e","l"]


//console.log(ourString[1])
//console.log(ourString.charAt(1))


//let substring1 = ourString.substring(0,5)
//let substring2 = ourString.slice(6)


//console.log(substring1)
//console.log(substring2.toLowerCase())

//console.log(ourString.includes("hello"))

let fruits = "apple#banana#orange"

let fruitArray = fruits.split("#")
let joinedString = fruitArray.join("-")

//console.log(joinedString)

let str1 = " Hello World! "

//console.log(str1.trim())


let str = "Hello, JavaScript!";
let newStr1 = str.replace("JavaScript", "Node.js"); 
let newStr2 = str.replaceAll("l", "L");
let parts = str.split(","); 


console.log(newStr1)
