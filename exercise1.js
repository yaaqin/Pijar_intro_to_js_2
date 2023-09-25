//1
//includes
//one of the methods that can be used to check values ​​in an array, meaning whether a value we want to check exists
//in related data variables ( salah satu method yang bisa digunakan untuk pengecekan nilai dalam array, maksudnya apakah suatu nilai
//yang ingin kita cek ada dalam variabel data terkait )

const fruit = ["banana", "apple", "orange"]
const hasCherry = fruit.includes("apple") //true

// console.log(hasCherry)

//2
//indexOf
//used to find out the index order of a value in an array (digunakan untuk mengetahui urutan index suatu nilai yang ada pada pada suatu array)

const index = fruit.indexOf("orange") //2

// console.log(index)

//3
//slice
//Slice is used to retrieve values ​​from data via 2 parameters (slice digunakan untuk mengambil nilai dari sebuah data melalui 2 parameter)
//starting from the first parameter to the 2nd parameter where the parameter is filled with its index (mulai dari parameter pertama sampai
//parameter ke 2 dimana parameter diisi dengan index nya)


const slice = fruit.slice(2)  

// console.log(slice)

//4
//substr
//used to retrieve values ​​using 2 parameters (digunakan untuk mengambil nilai menggunakan 2 parameter)
//the first parameter for the first index for data retrieval (parameter pertama untuk index pertama pengambilan data)
//and the parameter is indicated for the number of characters taken from the first parameter(dan parameter ditunjukan untuk jumlah
//karakter yang diambil dari parameter pertama)

const email = "yaqin.me@gmail.com"
const substr = email.substr(9,5) //gmail

// console.log(substr)

//5
//lastindexof
//used to display the last index containing the parameter value(digunakan untuk menampilkan index terakhir yang mengandung nilai parameter)

const lastIndex = email.lastIndexOf(("q"))

// console.log(lastIndex)

//6
//replace
//used to change one character mentioned in the first parameter(digunkan untuk merubah satu karakter yang disebutkan di parameter pertama)
//and changed to the character in the second parameter(dan diubah menjadi karakter yang ada di parameter ke dua)

const replace = email.replace("q","k")

// console.log(replace)

//7
//concat
//used to combine 2 variables(digunakan untuk menggabungkan 2 variabel)

const studentName = "21"
const age = "31"

const concat = studentName.concat(age) //2131

// console.log(concat)

//8
//map
//used to apply an array with a function(digunakan untuk mengaplikasikan sebuah array yang dengan sebuah fungsi)

const firstData = [1, 2, 3, 4, 5];
const map = firstData.map((num) => num * 2);

// console.log(map);

//9
//every
//used to check whether a variable meets certain conditions(digunakan untuk memeriksa apakah suatu variabel memenuhi kondisi tertentu)

const numbers = [2, 4, 6, 9, 10];
const every = numbers.every((num) => num % 2 === 0);

console.log (every) //false

//10
//some
//used to check whether there is one value that meets certain conditions in a variable(digunakan untuk memeriksa apakah ada salah
//satu nilai yang memenuhi kondisi tertentu dalam sebuah variabel)

const some = numbers.some((num) => num % 2 === 0);

