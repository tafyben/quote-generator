// get quotes from api
// let apiQuotes = [];

// show new quote
function newQuote(){
    // pick random quotes from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}


// async function getQuotes(){
//     const apiUrl = 'https://type.fit/api/quotes';

//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // errors here
//     }
// }

// as it starts
// getQuotes(); 
newQuote();