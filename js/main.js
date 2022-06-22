// ARRAY ITERATION

// forEach()
const list = ["hats", "sunscreen", "towel"];
list.forEach(someFunction);

function someFunction(listItem) {
  console.log(listItem);
}

// indexOf()
const stationary = ["pens", "pencils", "ruler", "eraser"];
let indexValue = stationary.indexOf("ruler");
console.log(indexValue);

// find()
const ages = [9, 37, 15, 26, 12, 27];
let adults = ages.find(checkAge);
console.log(adults);

function checkAge(age) {
  return age > 18;
}

// filter()
const grades = [89, 56, 79, 96, 83];
const a = grades.filter(highGrade);
console.log(a);

function highGrade(grade) {
  return grade > 79;
}