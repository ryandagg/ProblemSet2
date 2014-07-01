// Q1: Write a function firstReverse that takes a single string parameter and returns the string in reverse order.
var firstReverse = function(str) {
	revStr = ''
	for (var i = str.length -1; i >= 0; i--) {
		revStr += str[i];
	}
	return revStr
}

console.log(firstReverse("ryan"))

// Q2: Write a function swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols stay the way they are.
var swapCase = function(str) {
	newStr = '';
	for (var i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			newStr += str[i].toLowerCase();
		}
		else if (str[i] === str[i].toLowerCase()) {
			newStr += str[i].toUpperCase();
		}
		else {
			newStr += str[i];
		}
	}
	return newStr;
}

console.log(swapCase("Hello World"))

// Q3: Write a function letterCount that takes a single string parameter and returns the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by single spaces.

var onlyUnique = function(value, index, array) {
	return array.indexOf(value) === index;
}

var letterCount = function(str) {
	var seperated = str.split(" ");
	var countArray = []
	for (var i = 0; i < seperated.length; i++) {
		countArray.push(seperated[i].length - seperated[i].split("").filter(onlyUnique).length)
	}

	var highest = 0;
	for (var j = 0; j < countArray.length; j++) {
		if (countArray[j] > highest) {
			highest = countArray[j];
		}
	}

	if (highest === 0) {
		return -1;
	}
	else {
		return seperated[(countArray.indexOf(highest))];
	}
}

console.log(letterCount("Today, is the greatest day ever!"))
