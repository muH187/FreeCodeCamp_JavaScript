let myProfile = [
    "Name: Muhammad Ali",
    "Qualification: Intermediate",
    "Profession: Entrepreneurship",
    "Passion: Software Engineer"
]
console.log(myProfile)
console.log(myProfile.length)

let mySelf = [
    "Muhammad Ali",
    19,
    true
]
console.log(mySelf)

let card = [1, 2, 3, 4]
card.push(5)
console.log(card)

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMsg = "Same here."

messages.push(newMsg)
messages.push("Great to hear that.", "So where do you get now?", "I have almost built it from the scratch. What about you?", "I have build it and I'm just about to publish  it online.")
console.log(messages)

// messages.pop()
// console.log(messages)

for ( let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}