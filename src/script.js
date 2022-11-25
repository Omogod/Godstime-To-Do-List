let main = document.getElementById("root");
let h1 = document.createElement("h1");
h1.innerHTML = "OmoGod TO DO LIST";
main.appendChild(h1);

let Cover = document.createElement("div");
Cover.setAttribute("class", "Cover");
main.appendChild(Cover);


// let image = document.createElement("img");
// image.setAttribute("class", "img");
// image.src = "proj7.jpeg";
// main.appendChild(image);


let smallCover = document.createElement("div");
smallCover.setAttribute("class", "smallCover");
main.appendChild(smallCover);

let date = document.createElement("div");
date.setAttribute("class", "date");
smallCover.appendChild(date);

let date1 = document.createElement("p");
date1.setAttribute("class", "date1");
date1.innerHTML = new Date().toDateString();
date.appendChild(date1);

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter your task");
input.setAttribute("id", "input");
smallCover.appendChild(input);

let button = document.createElement("button");
button.setAttribute("id", "button");
button.innerHTML = "Add Task";
smallCover.appendChild(button);

button.onclick = function () {
    if( document.getElementById("input").value == ""){
        alert("Please enter a task");
    }else{
    let newTaskDiv = document.createElement("li");
    newTaskDiv.textContent = document.getElementById("input").value;
    newTaskDiv.setAttribute("class", "newTaskDiv");
    document.getElementById("input").value = "";
    smallCover.appendChild(newTaskDiv);
};
};

//delete button
let deleteButton = document.createElement("button");
deleteButton.setAttribute("id", "deleteButton");
deleteButton.innerHTML = "Delete Task";
smallCover.appendChild(deleteButton);

deleteButton.onclick = function () {
    let newTaskDiv = document.getElementsByClassName("newTaskDiv");
    newTaskDiv[0].remove();
}

//clear button


let clearButton = document.createElement("button");
clearButton.setAttribute("id", "clearButton");
clearButton.innerHTML = "Clear All";
smallCover.appendChild(clearButton);

clearButton.onclick = function () {
    let newTaskDiv = document.getElementsByClassName("newTaskDiv");
    while (newTaskDiv.length > 0) {
        newTaskDiv[0].remove();
    }
}

    let clear = setInterval(function () {
    let newTaskDiv = document.getElementsByClassName("newTaskDiv");
    while (newTaskDiv.length > 0) {
        newTaskDiv[0].remove();
    }
}, 86400000);

//date 



