// add whatever parameters you deem necessary
function isSubsequence(sub, str) {
    let subIndex = 0;
    let strIndex = 0;
  
    while (strIndex < str.length) {
      if (sub[subIndex] === str[strIndex]) {
        subIndex++;
      }
      if (subIndex === sub.length) {
        return true;
      }
      strIndex++;
    }
  
    return false;
  }
  