// Get button elements
const pplButton = document.querySelector('.pplButton');
const outputDiv = document.querySelector('.outputDiv');

// Fetch URL
const pplURL = new Request('https://swapi.dev/api/people', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
});

// Fetch data
pplButton.addEventListener('click', () => {
fetch(pplURL)
.then(response => {
    outputDiv.innerHTML = "Waiting for Response";
    if (response.ok) {
        // console.log(response)
        return response;
        
    } throw (Error(response.statusText))
})
.then(response => response.text())
.then(text => outputDiv.innerText = text)
}, false);

(async function getData() {

    //Utility Functions for fetch
    const urls = ["https://swapi.co/api/planets/", "https://swapi.co/api/films/", "https://swapi.co/api/people/"];
    const checkStatus = res => res.ok ? Promise.resolve(res) : Promise.reject(new Error(res.statusText));
    const parseJSON = response => response.json();
  
    // Get a single endpoint.
    const getPage = url => fetch(url)
      .then(checkStatus)
      .then(parseJSON)
      .catch(error => console.log("There was a problem!", error));
  
    // Keep getting the pages until the next key is null.
    const getAllPages = async (url, collection = []) => {
      const { results, next } = await getPage(url);
      collection = [...collection, ...results];
      if (next !== null) {
        return getAllPages(next, collection);
      }
      return collection;
    }
  
    // Select data out of all the pages gotten.
    const [ planets, films, people ] = await Promise.all(urls.map(url => getAllPages(url)));
    buildData(films, planets, people);
  
  })();