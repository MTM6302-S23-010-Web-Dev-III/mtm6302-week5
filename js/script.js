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