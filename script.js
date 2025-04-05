const quotes = [
    {
        text: "The only way to do great work is to love what you do. ",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    }
];


const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');


function getRandomQuote() {

    const randomIndex = Math.floor(Math.random() * quotes.length);


    return quotes[randomIndex];
}


function displayQuote() {

    const randomQuote = getRandomQuote();


    quoteElement.textContent = randomQuote.text;
    authorElement.textContent = "- " + randomQuote.author;
}


newQuoteButton.addEventListener('click', displayQuote);


displayQuote();