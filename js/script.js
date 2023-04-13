// get quotes from api
let apiQuotes = [];
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (error) {
        // errors here
    }
}

// as it starts
getQuotes(); 