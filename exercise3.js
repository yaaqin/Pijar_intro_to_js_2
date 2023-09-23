const dataArray = [7, 2, 98, 72, 27, 74, 64];
const nilaiAwal = 1;
const nilaiAkhir = 10;






// cariDanTampilkanData(1,10,dataArray)

const valData1todata2 = (nilai1, nilai2) => {
  return new Promise ((resolve,reject) => {
    setTimeout (() => {
      if (nilai1 < nilai2) {
        resolve ("nilai 1 dan 2 benar")
      }else {
        reject ("Poses gagal")
      }
    }, 8500)
    })
  }

const cekArr = (arr) => {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      if (arr.length >= 5) {
        resolve("data array benar")
      } else {
        reject("Jumlah angka dalam dataArray harus lebih dari 5")
      }
    },2000)
  })
  }
  
const salahangka = (nilai1,nilai2) => {
  if (nilai2 <= nilai1) {
    console.log("nilai ke 2 harus lebih besar dari nilai pertama")
  }else {
    return ""
  }
}

const cariDanTampilkanData = (nilaiAwal, nilaiAkhir, dataArray) => {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      const hasilPencarian = dataArray.filter((data) => data >= nilaiAwal && data <= nilaiAkhir);
      hasilPencarian.sort((a, b) => a - b);
      if (hasilPencarian.length > 0) {
        resolve(`data yang sesuai :${hasilPencarian}`)
      } else {
        reject("tidak ada data yang sesuai")
      } 
    },3500)
  })
}  

const cekdtaa = async (nilai1,nilai2,nilaiArr) => {
  try {
    console.log("pengecekan data...")
    const array = await cekArr(nilaiArr)
    const success = await valData1todata2(nilai1,nilai2)
    const data = await cariDanTampilkanData(nilai1,nilai2,nilaiArr)
    console.log(success)
    console.log(array)
    console.log(data)
    
  } catch (error) {
    console.log(error)
    const fail = await salahangka(nilai1,nilai2)
    console.log(fail)
  }
}

cekdtaa(1,10,dataArray)