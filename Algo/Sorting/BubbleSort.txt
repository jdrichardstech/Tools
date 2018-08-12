/*
Bubble sort is a simple sorting algorithm that repeatedly 
steps through the list to be sorted, compares each pair of adjacent 
items and swaps them if they are in the wrong order. 
The pass through the list is repeated until no swaps are needed, 
which indicates that the list is sorted.
*/


// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// correct implementation: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed
function bubbleSort(array) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return array;
}