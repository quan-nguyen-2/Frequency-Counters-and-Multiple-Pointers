// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      if (arr[left] > 0) {
        left++;
      } else if (arr[right] < 0) {
        right--;
      } else {
        // Swap positive and negative numbers
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
  
    return arr;
  }
  