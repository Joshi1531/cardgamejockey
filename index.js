function updateRes(calc) {
    const players = parseInt(document.getElementById("plNum").value);
    const decks = parseInt(document.getElementById("deckSel").value);
    const jokers = parseInt(document.getElementById("jokSel").value);
    const size = parseInt(document.getElementById("sizeSel").value);

    const totalCards = (decks * size) + (jokers * decks)

    const cardsPerPlayer = Math.floor(totalCards/players)
    const remainder = totalCards % players

    document.getElementById("firstRes").value = `Cards: ${cardsPerPlayer.toString()} | Remainder: ${remainder.toString()}`
}

window.onload = function() {
    updateRes();
}