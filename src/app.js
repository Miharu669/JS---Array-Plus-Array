export function arrSum(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, num) => acc + num, 0);
}
