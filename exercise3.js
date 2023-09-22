function cariDanTampilkanData(nilaiAwal, nilaiAkhir, dataArray) {
    // Validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray > 5
    if (nilaiAwal >= nilaiAkhir || dataArray.length <= 5) {
      console.log("Validasi gagal. Periksa nilaiAwal, nilaiAkhir, atau dataArray.");
      return;
    }
  
    // Filter data yang sesuai dengan kriteria
    const hasilPencarian = dataArray.filter((data) => data >= nilaiAwal && data <= nilaiAkhir);
  
    // Urutkan hasil pencarian
    hasilPencarian.sort((a, b) => a - b);
  
    // Tampilkan hasil ke layar/console
    console.log("Data yang sesuai:");
    hasilPencarian.forEach((data) => {
      console.log(data);
    });
  }
  
  // Contoh penggunaan fungsi
  const dataArray = [7, 2, 10, 5, 8, 1, 12, 3, 6, 9];
  const nilaiAwal = 3;
  const nilaiAkhir = 11;
  
  cariDanTampilkanData(nilaiAwal, nilaiAkhir, dataArray);
  