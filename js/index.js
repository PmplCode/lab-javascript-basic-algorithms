// Iteration 1: Names and Input
//
let hacker1 = "Eloi";
console.log("The driver's name is " + hacker1)

let hacker2 = "Batman";
console.log("The navigator's name is " + hacker2)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else {
    console.log("The navigator has the longest name, it has " + hacker2.length + " characters.")
}
// Iteration 3: Loops

//3.1
let hacker1Separated = "";

for (i = 0; i < hacker1.length; i++){
    let letter = hacker1.slice(i,i+1);
    hacker1Separated += `${letter} ` 
}
console.log(hacker1Separated.trimEnd().toUpperCase());

// 3.2
let hacker2Reverse = "";

for (i = hacker2.length; i > 0; i--){
    let letter = hacker2.slice(i-1,i);
    hacker2Reverse += `${letter}`
}
console.log(hacker2Reverse.toUpperCase());

// 3.3
if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) == 0) {
    console.log("What?! You both have the same name?");
} else {
    console.log("The driver's name goes first.")
}

//EXTRA

let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);

