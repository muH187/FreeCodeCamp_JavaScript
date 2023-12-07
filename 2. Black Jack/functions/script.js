let player1Time = 105
let playre2Time = 102

function getFastestRaceTime() {
    if (player1Time < playre2Time) {
        return player1Time
    } else if (playre2Time < player1Time) {
        return playre2Time
    } else {
        return player1Time
    }
}

let fastestTime = getFastestRaceTime()
console.log(fastestTime)

// Challenge:

function totalTime() {
    return player1Time + playre2Time
}

let result = totalTime()
console.log(result)