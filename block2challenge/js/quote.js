// Quotes API
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data);
    let i = Math.floor((Math.random() * data.length) + 1);
    const quote = data[i];
    document.querySelector(".header__quote").innerText = '"'+ quote.text +'"';
    let unknown = quote.author;
    if (unknown === null) {
      document.querySelector(".header__author").innerText = '--'+ "author unknown";
    } else {
      document.querySelector(".header__author").innerText = '--'+ quote.author;
    } 
    
  });
  



  