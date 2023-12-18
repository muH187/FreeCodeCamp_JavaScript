let myName = "Muhammad Ali"
const welcomeEl = document.getElementById("welcome-el")
welcomeEl.textContent = "Welcome Back " + myName

const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")

count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    saveEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0
}