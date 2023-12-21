let message = ""
let sum = 0
let cards = []
let isAlive = false
let hasBlackJack = false

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

function getRandomCard() {
    let randNumber = Math.floor( Math.random() * 13 ) + 1
    if (randNumber === 1) {
        return 11
    } else if (randNumber >= 11) {
        return 10
    } else {
        return randNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum === 21) {
        message = "You have got Black Jack."
        hasBlackJack = true
    } else if (sum <= 20) {
        message = "Do you want to draw a new Card?"
    } else {
        message = "You are out of the game."
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck.")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}