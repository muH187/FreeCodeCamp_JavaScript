let firstCard = 5
let secondCard = 9
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


let messageEl = document.getElementById("message-el")

// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")

let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Card: " + cards[0] + " : " + cards[1]
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You have got Black Jack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck")
    let card = 7
    sum += card
    cards.push(card)
    renderGame()
}