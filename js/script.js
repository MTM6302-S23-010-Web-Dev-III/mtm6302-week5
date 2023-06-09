// creating an array with [] and comma separated list of values
const myColors = ["red", "green", "blue", "white", "black", "tomato"]
// index of an array starts from 0

const messageList = document.getElementById("colorMessages")

messageList.children[0].innerHTML += myColors[3]

myColors[4] = "cyan"
messageList.children[1].innerHTML += myColors[4]

