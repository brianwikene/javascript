/*
Return the remaining elements of an array after chopping off n elements from the head.
*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr = arr.slice(howMany);
  return arr;
}

slasher([1, 2, 3], 2);
