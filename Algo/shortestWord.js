// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// The moon rose over the mountain

function findShort(s){
  let arr = s.split(" ")
  let y = arr[0]
  console.log(y)
  for(let i = 1; i<arr.length; i++){
  if(arr[i].length < y.length){
  y = arr[i]
  }
  
  }
  return y.length
  }

  findShort('The moon rose over Miami')