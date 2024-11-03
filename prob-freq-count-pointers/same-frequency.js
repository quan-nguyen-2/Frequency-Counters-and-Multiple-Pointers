// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();
  
    if (str1.length !== str2.length) return false;
  
    const frequencyCounter = {};
  
    // Count frequencies of each digit in the first number
    for (let char of str1) {
      frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }
  
    // Check frequencies in the second number
    for (let char of str2) {
      if (!frequencyCounter[char]) {
        return false;
      } else {
        frequencyCounter[char]--;
      }
    }
  
    return true;
  }
  