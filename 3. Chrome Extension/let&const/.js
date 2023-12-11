const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 Days"

shippingCost = 15
shippingTime = "7-14 Days"

const fullPrice = basePrice - discount + shippingCost

console.log("Total Cost: " + fullPrice + ". It will arive in " + shippingTime)