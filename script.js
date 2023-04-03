var quotes = [
    "I'll torture you, kill you, revive you, and kill you again. -Natsume Sakasaki",
    "Only being referred to as a 'good boy' makes my ass itch, so I'd like to request a different term! - Ibara Saegusa",
    "In that case, I'd have rather gotten whipped! At least there's love! That way I could've thought of it as some kind of extreme play! But there wasn't any love, so it just hurt a lot! -Kaoru Hakaze",
    "sir bible gay -Souma Kansaki",
    "die -Natsume Sakasaki" 
]

function newQuote() {
  var rannum = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteDisplay').innerHTML = quotes[rannum];
}
