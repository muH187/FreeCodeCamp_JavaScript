let  countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    console.log(count)
}

let welcomeEl = document.getElementById("welcome-el")

let name = "Muhammad Ali"
let greeting = "Welcome Back "

welcomeEl.innerText = greeting + name
