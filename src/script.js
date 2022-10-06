let main = document.getElementById("root");
let h1 = document.createElement("h1");
h1.innerHTML = "OmoGod TO DO LIST";
main.appendChild(h1);

let Cover = document.createElement("div");
Cover.setAttribute("class", "Cover");
main.appendChild(Cover);

let smallCover = document.createElement("div");
smallCover.setAttribute("class", "smallCover");
Cover.appendChild(smallCover);

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
    for (let i = 0; i < newTaskDiv.length; i++) {
        newTaskDiv[i].remove();
    }
}

    let clear = setInterval(function () {
    let newTaskDiv = document.getElementsByClassName("newTaskDiv");
    while (newTaskDiv.length > 0) {
        newTaskDiv[0].remove();
    }
}, 86400000);

