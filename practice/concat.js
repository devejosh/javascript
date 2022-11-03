const name = "Devendra Joshi";
const age = 28;
const byear = 1994;

const detail =
  "I'm " + name + ", My age is " + age + " and I was born on " + byear + ".";
console.log(detail);

console.log("Using template literals now");
console.log("---------------------------");
const tempLiterals = `I'm ${name}, my age is ${age} and I was born in the year ${byear}`;
console.log(tempLiterals);
