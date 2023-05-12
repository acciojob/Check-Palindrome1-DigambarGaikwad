// complete the given function

function palindrome(str){
	// Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the clean string is equal to its reverse
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;

}
module.exports = palindrome
