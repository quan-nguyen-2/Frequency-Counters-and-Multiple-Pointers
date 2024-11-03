// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (message.length === 0) return true; // If the message is empty, return true
    if (letters.length === 0) return false; // If letters is empty but message is not, return false
  
    const letterCount = {};
    const messageCount = {};
  
    // Count occurrences in letters
    for (let char of letters) {
      letterCount[char] = (letterCount[char] || 0) + 1;
    }
  
    // Count occurrences in message
    for (let char of message) {
      messageCount[char] = (messageCount[char] || 0) + 1;
    }
  
    // Check if letters can fulfill the message
    for (let char in messageCount) {
      if (!letterCount[char] || letterCount[char] < messageCount[char]) {
        return false;
      }
    }
  
    return true;
  }
  