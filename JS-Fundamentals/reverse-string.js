/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  return someStr
    .split("") //returns a new array
    .reverse() //reverses the order of the array
    .join(""); //joins the elements of the array into a string
}

reverseStr("hello");
