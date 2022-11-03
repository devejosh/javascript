// BMI challange

const wmark = 78;
const hmark = 1.69;
const wgor = 92;
const hgor = 1.95;

let bmi_mark, bmi_gor;

console.log("BMI calculator");
console.log("===============");

bmi_mark = wmark / hmark ** 2;
console.log("Body mass index for Mark is " + bmi_mark);

bmi_gor = wgor / hgor ** 2;
console.log("Body mass index for Gor is " + bmi_gor);

const markHigherBMI = bmi_mark > bmi_gor;

if (markHigherBMI === true) {
  console.log(`Mark's BMI (${bmi_mark}) is higher than Gor's BMI ${bmi_gor}`);
} else {
  console.log(`Gor's BMI (${bmi_gor}) is higher than Mark's BMI (${bmi_mark})`);
}
