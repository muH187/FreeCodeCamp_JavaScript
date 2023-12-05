let count = 0

// Welcome User
let name = "Muhammad Ali"
let greeting = "Hey! " + name + " Welcome to Our Website"

let welcomeEl = document.getElementById("welcome-el")
welcomeEl.textContent = greeting
// 

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}