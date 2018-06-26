
function findMinAndRemoveSorted(array) {
  let min = array[0];
  array.splice(0,1);
  return min;
}
