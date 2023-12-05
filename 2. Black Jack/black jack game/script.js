let firstCard = 12
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""



function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You have got Black Jack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    console.log(message)
}