const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
  ];
  
  function searchName(keyword, limit, callback) {
    // Menerapkan filter dengan callback function
    const result = names.filter((name) => name.toLowerCase().includes(keyword.toLowerCase()));
  
    // Memastikan jumlah hasil tidak melebihi batasan
    const limitedResult = result.slice(0, limit);
  
    // Memanggil callback dengan hasil pencarian
    callback(limitedResult);
  }
  
  function displayResults(results) {
    if (results.length === 0) {
      console.log("Tidak ada hasil yang ditemukan.");
    } else {
      console.log("Hasil Pencarian:");
      results.forEach((name) => {
        console.log(name);
      });
    }
  }
  
  // Contoh penggunaan
  searchName("an", 2, displayResults);
  