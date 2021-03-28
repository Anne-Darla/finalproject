

var quotes =[
"Be yourself; everyone else is already taken. -Walt Disney",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
"So many books, so little time. -Frank Zappa",
"A room without books is like a body without a soul. - Marcus Tullius Cicero",
"Don't walk in front of me... I may not follow. Don't walk behind me...I may not lead. Walk beside me...just be my friend. - Albert Camus",
"If you tell the truth, you don't have to remember anything.- Mark Twain",
"Always forgive your enemies; nothing annoys them so much.- Oscar Wilde",
"We accept the love we think we deserve.- Stephen Cbosky",
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
} 






