// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

( capitals('COdeImmerSiVes'), [0,1,4,9,11] );

var capitals = function (word) {
  let arr = []
	// Write your code here
	for(let i = 0; i < word.length; i++){
	  if(word.charCodeAt(i) >64 && word.charCodeAt(i) < 91){
	    arr.push(word.indexOf(word[i]))
	  }
	}
	return arr
}