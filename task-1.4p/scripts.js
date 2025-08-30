function changeText() {
    var textsArray = ["Web Development", "Interactive Design", "JavaScript Basics", "GitHub Practice", "SIT725 Task 1.4P"];
    var number = getRandomNumberBetween(0, textsArray.length - 1);
    console.log("Index: ", number);
    document.getElementById("heading").innerHTML = textsArray[number];
}

function changeColor() {
    var colorsArray = ["red", "blue", "green", "purple", "teal", "orange"];
    var number = getRandomNumberBetween(0, colorsArray.length - 1);
    document.getElementById("heading").style.color = colorsArray[number];
}

function resetAll() {
    document.getElementById("heading").innerHTML = "SIT 725 Task 1.4P";
    document.getElementById("heading").style.color = "teal";
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
