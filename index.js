
function findMinAndRemoveSorted(arr) {
  let min = arr[0];
  arr.splice(0,1);
  return min;
}

function merge(arr1, arr2) {
  merged_arr = [];
  while (arr1.length != 0 && arr2.length != 0) {
    if (arr1[0] <= arr2[0]) {
      merged_arr.push(arr1[0]);
      arr1.splice(0,1);
    } else {
      merged_arr.push(arr2[0]);
      arr2.splice(0,1);
    }
  }
  if (arr1.length != 0) {
    merged_arr += arr1;
  } else if (arr2.length != 0) {
    merged_arr += arr2;
  }
  return merged_arr;
}

function mergeSort(arr) {

}

console.log(merge([1,3,5],[2,4,5,7]));
