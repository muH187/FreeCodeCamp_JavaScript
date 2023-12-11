let hands = ["Rock", "Paper", "Scissors"]

function getHands() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

console.log(getHands())