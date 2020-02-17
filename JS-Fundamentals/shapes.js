/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let newStr = "";
  switch (shape) {
    case "Triangle":
      for (let i = 1; i <= height; i++) {
        for (let j = 0; j < i; j++) {
          newStr += character;
          console.log(newStr);
        }
      }
      break;
    case "Square":
      for (let a = 0; a < height; a++) {
        newStr += character;
      }
      for (let b = 0; b < height; b++) {
        console.log(newStr);
      }
      newStr = "";
      break;
    case "Diamond":
  }
}

printShape("Triangle", 3, "$");
printShape("Square", 3, "%");
