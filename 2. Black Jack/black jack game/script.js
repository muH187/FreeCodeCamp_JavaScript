
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
    name: "Muhammad Ali",
    chips: "153"
}



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


let messageEl = document.getElementById("message-el")

// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")

let cardsEl = document.getElementById("cards-el")

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard() {
    let randNumber = Math.floor(Math.random() * 13) + 1
    if (randNumber === 1) {
        return 11
    } else if (randNumber >= 11) {
        return 10
    } else {
        return randNumber
    }
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Card: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

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
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}

