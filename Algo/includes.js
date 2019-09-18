/*
    Write your own version of includes() method on String that ignores letter case, and without using existing includes() method.

    solution("Hello, world", "Hello") == true
    solution("Hello, world", "WORLD") == true
    solution("Hello, world", "Goodbye") == false
*/

function myInclude(str1, str2){
  if(str1.toLowerCase().indexOf(str2.toLowerCase())===-1){console.log('false')} else{
    console.log('true')
  }
}

myInclude("Hello, world", "Hello")