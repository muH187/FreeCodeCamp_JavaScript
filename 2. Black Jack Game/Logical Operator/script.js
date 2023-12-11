let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === false) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating Certificate...")
}
// ======================================================
let hasSolvedChallenge = false
let hasHintLeft = false

if (hasSolvedChallenge === false && hasHintLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing  the solutions...")
}

// ========================================

let likeDocumentaries = true
let likeStartups = true

if (likeDocumentaries === false || likeStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we may think you would like it.")
}