/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

function objectProperties(someObj) {
  let keys = Object.keys(someObj);
  let propValues = Object.values(someObj);

  if (typeof someObj == "object") return `Key: ${keys}, Value: ${propValues}`;
  else
    return "this is not an object. Please create an object to execute this function";
}

objectProperties((circle = { radius: 1, color: "blue" }));
