/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  const newArray = [];
  for (let i = 0; i < someArr.length; i++) {
    if (index !== i) {
      newArray.push(someArr[i]);
    }
  }
  return newArray;
}

spliceElement([1, 2, 3, 4], 1);
