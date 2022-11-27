/*
    Generating today's quote
*/

// Variables
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotes = [
    {
        quote: "You aren’t wealthy until you have something that money can’t buy.",
        author: "Garth Brooks"
    },
    {
        quote: "Do not pray for an easy life, pray for the strength to endure a difficult one.",
        author: "Bruce Lee"
    },
    {
        quote: "Don’t walk in front of me; I may not follow. Don’t walk behind me; I may not lead. Just walk beside me and be my friend.",
        author: "Albert Camus"
    },
    {
        quote: "The best things in life are free. The second best things are very, very expensive",
        author: "Coco Chanel"
    },
    {
        quote: "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
        author: "Joseph Campbell"
    },
    {
        quote: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        quote: "Everything is theoretically impossible, until it is done.",
        author: "Robert A. Heinlein"
    },
    {
        quote: "What you learn from a life in science is the vastness of our ignorance.",
        author: "David Eagleman"
    },
    {
        quote: "If I have seen further it is by standing on the shoulders of Giants.",
        author: "Issac Newton"
    },
    {
        quote: "Our virtues and our failures are inseparable, like force and matter. When they separate, man is no more.",
        author: "Nikola Tesla"
    },
    {
        quote: "Every brilliant experiment, like every great work of art, starts with an act of imagination.",
        author: "Jonah Lehrer"
    },
    {
        quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
        author: "Marie Curie"
    },
    {
        quote: "Physics is like sex: sure, it may give some practical results, but that's not why we do it.",
        author: "Richard P. Feynman"
    },
    {
        quote: "You can, you should, and if you’re brave enough to start, you will.",
        author: "Stephen King"
    },
    {
        quote: "Happiness often sneaks in through a door you didn’t know you left open.",
        author: "John Barrymore"
    },
    {
        quote: "He who does not understand your silence will probably not understand your words.",
        author: "Elbert Hubbard"
    },
    {
        quote: "If you tell the truth, you don’t have to remember anything.",
        author: "Mark Twain"
    },
    {
        quote: "Every saint has a past, and every sinner has a future.",
        author: "Oscar Wilde"
    },
    {
        quote: "It is sad not to love, but it is much sadder not to be able to love",
        author: "Miguel de Unamuno"
    },
    {
        quote: "It hurts to leave a light on for nobody.",
        author: "Graham Foust"
    },
    {
        quote: "Breathing is hard. When you cry so much, it makes you realize that breathing is hard.",
        author: "David Levithan"
    },
    {
        quote: "Don't cry because it's over, smile because it happened",
        author: "Anonymous"
    },
    {
        quote: "The walls we build around us to keep sadness out also keep out the joy.",
        author: "Jim Rohn"
    },
    {
        quote: "Sometimes you've got to be able to listen to yourself and be okay with no one else understanding.",
        author: "Anonymous"
    }
]
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Replace inner text of span
quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;
