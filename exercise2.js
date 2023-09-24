const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
  ];
  
  const searchName = (keyword, limit, callback) => {
    // filter name
    const result = names.filter((name) => nama.toLowerCase().includes(keyword.toLowerCase()));
    // Limits the number displayed(Melimit jumlah yang ditampilkan)
    const limitResult = result.slice(0, limit);  
    callback(limitResult);
  }
  
  const displayResults = (results) => {
    if (results.length === 0) {
      console.log("No results found...");
    } else {
      console.log("Result:");
      results.forEach((name) => {
        console.log(name);
      });
    }
  }
  
  searchName("an", 5, displayResults);
  