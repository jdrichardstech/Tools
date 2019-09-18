Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
-"yes, ascending" - if the numbers in the array are sorted in an ascending order
-"yes, descending" - if the numbers in the array are sorted in a descending order
-"no" - otherwise

function isSortedAndHow(arr){
  let str='unknown'
  for(let i = 0; i < arr.length-1; i++){
   
    if(arr[i]< arr[i+1]){
      str = 'yes, ascending'
    }else{str = 'unknown'
    break;
    }
   
   
  }
  if(str === 'yes, ascending'){
    return str
  }else{
    for(let i = 0; i < arr.length-1; i++){
      
      if(arr[i]>arr[i+1]){
        str = 'yes, descending'
      }else{str = 'no'}
        
  }
  return str
  
}
}