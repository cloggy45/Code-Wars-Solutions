function selectionSort(array) {
  
  // Outer loop represents each passthrough of Selection sort.
  for(var i=0;i<array.length;i++) {
    /* 
      Keep track of the index containing the lowest value we encounter so far, 
      Which will initially be the first index of each passthrough. 
      This index will increment with each passthrough.
    */
    var lowestNumberIndex = i;
    for(var j = i + 1; j<array.length;j++) {
      // Checks each element of the array that has not been sorted and looks for the lowest number.
      // 'lowestNumberIndex' will contain the lowest number found so far.
      if(array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    /* 
      Once we've found the lowest number not yet sorted
      We check to see if this lowest number is already in its correct place (i)
      If not, swap the lowest number with the number
      that's in the position that the lowest number should be at
    */
    if(lowestNumberIndex != i) {
      var temp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = temp;
    }
  }
  return array;
}


console.log(selectionSort([5,3,1,5,6]));