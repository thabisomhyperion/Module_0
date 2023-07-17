let studMarks = [56, 43, 68, 60, 80, 95, 35]
//Arrays are dynamic
// let all_m = prompt("Enter three marks: ")
// let more_marks = all_m.split(', ')
// console.log(more_marks)
// more_marks.forEach(function (m) {
// 	studMarks.push(parseInt(m))
// })
//
//studMarks.pop()
studMarks.shift()
studMarks.sort()
console.log(studMarks.indexOf(80))
studMarks.forEach(function (mark) {
		if (mark >= 75){
			console.log(String(mark) +" -> Passed with distinction")
		}
		else if (mark >= 50){
			console.log(String(mark) +" -> Passed")
		}
		else{
			console.log(String(mark) + " -> Failed")
		}
})

// for(let mark in studMarks)
// 	{
// 		console.log(studMarks[mark])
// 	}

// for (let i = 0; i < studMarks.length; i++){
// 	if (studMarks[i] >= 75){
// 		console.log(String(studMarks[i]) +" -> Passed with distinction")
// 	}
// 	else if (studMarks[i] >= 50){
// 		console.log(String(studMarks[i]) +" -> Passed")
// 	}
// 	else{
// 		console.log(String(studMarks[i]) + " -> Failed")
// 	}
// }
