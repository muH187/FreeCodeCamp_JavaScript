
let saveEl = document.getElementById("save-el")
let  countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)


function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    let countStr = " " + count + " - "
    saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
}

let welcomeEl = document.getElementById("welcome-el")

let name = "Muhammad Ali"
let greeting = "Welcome Back "

welcomeEl.innerText = greeting + name
