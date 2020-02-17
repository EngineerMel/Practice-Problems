/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
  // a sequence of characters that defines a specific search pattern
  let regularExpression = /[\W_]/g;

  let smallStr = someStr.toLowerCase().replace(regularExpression, "");

  let reversed = smallStr
    .split("")
    .reverse()
    .join("");
  if (reversed === smallStr) return true;
  return false;
}

isPalindrome("never odd or even");
