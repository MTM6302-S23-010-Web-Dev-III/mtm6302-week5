// creating an array with [] and comma separated list of values
const myColors = ["red", "green", "blue", "white", "black", "tomato"]
// index of an array starts from 0

const messageList = document.getElementById("colorMessages")

messageList.children[0].innerHTML += myColors[3]

myColors[4] = "cyan"
messageList.children[1].innerHTML += myColors[4]

// adding a value at the end of array using push()
myColors.push("darksalmon")

messageList.children[2].innerHTML += myColors

// remove a value from the end using pop()
myColors.pop()

messageList.children[3].innerHTML += myColors

// remove one item from the start using shift()
myColors.shift()
messageList.children[4].innerHTML += myColors

// adding a value at the start of the array using unshift()
myColors.unshift("hotpink")
messageList.children[5].innerHTML += myColors

// splice() accepts three params index to start from, how many items to delete, what values to add 
myColors.splice(2, 0, "royalblue")
messageList.children[6].innerHTML += myColors

// sorting the array using sort()
myColors.sort()
messageList.children[7].innerHTML += myColors

// Concatenating two arrays
const darkColors = ["darkseagreen", "darkgreen", "darkred"]

// Using concat method
// const allColors = myColors.concat(darkColors)

// another way of concatenating the arrays
const allColors = [...myColors, ...darkColors]

// messageList.children[8].innerHTML += allColors

// using the join() method to join the values in a string
messageList.children[8].innerHTML += allColors.join(" - ")

/* function doYouHaveColor (colorName) {
  let colorIndex = allColors.indexOf(colorName)
  if (colorIndex >= 0) {
    console.log("Yes, we have this color")
  } else {
    console.log("No, we do not have this color")
  }
} */

function doYouHaveColor (colorName) {
  if (allColors.includes(colorName)) {
    document.getElementById("colorResponse").innerHTML = "Yes, we have this color"
  } else {
    document.getElementById("colorResponse").innerHTML = "No, we do not have this color"
  }
}

const scores = [43, 68, 35, 82]

const scoreMessageList = document.getElementById("scoreMessages").children

// Using filter() method to find any value grater than 50
const passingScore = scores.filter(score => score > 50)

scoreMessageList[0].innerHTML += passingScore

// using map() method to map each value with a function
const doubleScores = scores.map(score => score * 2)
scoreMessageList[1].innerHTML += doubleScores

// reducing array to single value by running the provided function
const totalDoubleScore = doubleScores.reduce((accumulator, score) => accumulator + score)
scoreMessageList[2].innerHTML += totalDoubleScore

const coloredBoxesSection = document.getElementById("coloredBoxes")

for (color of allColors) {
  coloredBoxesSection.innerHTML += `<div class="box" style="background-color:${color}"></div>`
}