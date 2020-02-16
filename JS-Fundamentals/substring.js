/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

function substring(someStr, startIndex, endIndex) {
  if (typeof someStr != "string") {
    return "input was incorrect";
  } else return someStr.substring(startIndex, endIndex);
}

substring(1, 0, 3);
