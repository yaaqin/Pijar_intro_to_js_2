//1
//includes
//one of the methods that can be used to check values ​​in an array, meaning whether a value we want to check exists
//in related data variables ( salah satu method yang bisa digunakan untuk pengecekan nilai dalam array, maksudnya apakah suatu nilai
//yang ingin kita cek ada dalam variabel data terkait )

const fruit = ["banana", "apple", "orange"]
const hasCherry = fruit.includes("apple")

// console.log(hasCherry)

//2
//indexOf
//used to find out the index order of a value in an array (digunakan untuk mengetahui urutan index suatu nilai yang ada pada pada suatu array)

const index = fruit.indexOf("orange")

// console.log(index)

//3
//slice
//slice digunakan untuk mengambil nilai dari sebuah data melalui 2 parameter
//mulai dari parameter pertama sampai parameter ke 2 dimana parameter diisi dengan index nya

const slice = fruit.slice(2)

console.log(slice)

//4
//substr
//digunakan untuk mengambil nilai menggunakan 2 parameter
//parameter pertama untuk index pertama pengambilan data
//dan parameter ditunjukan untuk jumlah karakter yang diambil dari parameter pertama

const email = "yaqin.me@gmail.com"
const substr = email.substr(9,5)

// console.log(substr)

//5
//lastindexof
//digunakan untuk menampilkan index terakhir yang mengandung nilai parameter

const lastIndex = email.lastIndexOf(("q"))

// console.log(lastIndex)

//6
//replace
//digunkan untuk merubah satu karakter yang disebutkan di parameter pertama
//dan diubah menjadi karakter yang ada di parameter ke dua

const replace = email.replace("q","k")

// console.log(replace)

//7
//concat
//digunakan untuk mnggabungkan 2 variabel
// type of result variabel follow parent variabel

const studentName = "yaqin"
const age = [21, 30]

const concat = studentName.concat(age)

// console.log(concat)

//8
//map
//digunakan untuk mengaplikasikan sebuah array yang dengan sebuah fungsi

const firstData = [1, 2, 3, 4, 5];
const map = firstData.map((num) => num > 2);

// console.log(map);

//9
//every
//digunakan untuk memeriksa apakah suatu variabel memenuhi kondisi tertentu

const numbers = [2, 4, 6, 9, 10];
const every = numbers.every((num) => num % 2 === 0);

//10
//some
//digunakan untuk memeriksa apakah ada salah satu nilai yang memenuhi kondisi tertentu dalam sebuah variabel

const some = numbers.some((num) => num % 2 === 0);

