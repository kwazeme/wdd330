//  Get DOM elements
const textButton = document.querySelector('#number');
const apiButton = document.querySelector('#chuck');
const outputDiv = document.querySelector('#output');

// Get the URL for Fetch
const textURL = 'http://numbersapi.com/random';
const apiURL =  new Request('http://api.chucknorris.io/jokes/random', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
    
});

// Get Random number fact
textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => outputDiv.innerText = text )
    .catch( error => console.log('There was an error:', error))
},false);

// Get the api random Chuck Norris fact
apiButton = addEventListener('click', () => {
    fetch(apiURL)
    .then(response => {
        outputDiv.innerHTML  = 'Waiting for response...';
        if (response.ok) {
            return response;    
        }
        throw Error(response,statusText);
    })
    .then(response => response.json())
    .then(data => outputDiv.innerText = data.value)
    .catch(error => console.log("there was an error:", error))
}, false);