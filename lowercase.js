const firstname = "Ainul";
const lastname = "Yaqin";
const fullname = `${firstname} ${lastname}`
const result = fullname.toUpperCase()

// console.log(result)

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit, array, test) {
    const nomor = array + 1
  console.log(`Fruit at index ${nomor}: ${fruit}`);
});


const names = [
  "Abigail", "Alexandra", "Alison",
  "Amanda", "Angela", "Bella",
  "Carol", "Caroline", "Carolyn",
  "Deirdre", "Diana", "Elizabeth",
  "Ella", "Faith", "Olivia", "Penelope"
];

const namahurufkecil = names.filter((name) => name.toLocaleLowerCase())

console.log(namahurufkecil)


