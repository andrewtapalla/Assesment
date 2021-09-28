// First, tell us your name
let yourName = "Andrew Tapalla"

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


document.getElementById('add-gb').addEventListener('click', function() {
    gb = gb + 1;
    document.getElementById('qty-gb').textContent = gb
    document.getElementById("qty-total").textContent = gb + cc + sugar
})

document.getElementById('minus-gb').addEventListener('click', function() {
    if (gb > 0) {
    gb = gb - 1;
        document.getElementById('qty-gb').textContent = gb
        document.getElementById("qty-total").textContent = gb + cc + sugar
    }
})

//CHOCOLATE CHIP
document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc + 1;
    document.getElementById('qty-cc').textContent = cc
    document.getElementById("qty-total").textContent = gb + cc + sugar
})

document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc > 0) {
    cc = cc - 1;
        document.getElementById('qty-cc').textContent = cc
        document.getElementById("qty-total").textContent = gb + cc + sugar
    }
})

//SUGAR COOKIES
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar = sugar + 1;
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById("qty-total").textContent = gb + cc + sugar
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar > 0) {
        sugar = sugar - 1;
        document.getElementById('qty-sugar').textContent = sugar
        document.getElementById("qty-total").textContent = gb + cc + sugar
    }
})

// TODO: Hook up event listeners for the rest of the buttons
