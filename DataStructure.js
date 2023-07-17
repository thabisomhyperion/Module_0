/**
Data Structure:
----------------
=> Arrays:
	- linear storage of data
 	- access data using index
	- Using a Loop to access data is the array
 		> for loop
	 	> for of loop
	 	> forEach() method
	- build in functions
	  > indexOf() - Searches the array for the given element and returns its position
	 	> includes() - Checks if the array contains a given element
	  > pop() - Removes the last element in the array
	  > push() - Adds an element to the end of the array and returns the new length
	  > shift() - Removes the first element in the array
	  > sort() - Sorts elements in the array in ascending order
	  > splice() - Adds or removes elements in an array
	  > reverse() - Reverses the order of elements in the array
	  
=> Maps Maps
 - storing data in pairs (Key - value)
 - using a key to retrive data
 - Methods for map:
 	> set(key, value); 	- Adds a key-value pair.
	> has(key); - Checks to see if a key exists in the map.
  > delete(key); - Deletes the given key-value pair from the map.
	> clear(); 	 - Removes all key-value pairs in a map.
 	> keys(); - Returns all the keys within the map.
	> values(); - Returns all the values within the map.
  > entries(); - Returns all key-value pairs within the map.
*/

let studMarks = new Map();

studMarks.set("John", 56);
studMarks.set("Lekota", 43);
studMarks.set("Cristain", 68);
studMarks.set("Molemo", 60);
studMarks.set("Honolul", 80);
studMarks.set("Lekau", 56);

let studNames = ["John", "Lekota", "Cristain", "Molemo", "Honolul", "Lekau"]
studNames.forEach(function(n) {
		console.log(n, studMarks.get(n))
		if (studMarks.get(n) >= 75){
			console.log("Passed with distinction")
		}
		else if (studMarks.get(n) >= 50){
			console.log("Passed")
		}
		else{
			console.log("Failed")
		}
})
// for(let i in studMarks.keys()){
// 	console.log(i)
// }
// studMarks.clear();
// console.log(studMarks)