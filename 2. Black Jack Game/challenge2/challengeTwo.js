document.title = "Loops with Arrays"

let sentence = ["Hello", "My", "name", "is", "Muhammad", "Ali"]
let greetingEl = document.getElementById("greeting-el")


for ( let i = 0; i < sentence.length; i++ ) {
    
    greetingEl.textContent += sentence[i] + " "
}

