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
    while (newTaskDiv.length > 0) {
        newTaskDiv[0].remove();
    }
};


//edit button
// let editButton = document.createElement("button");
// editButton.setAttribute("id", "editButton");
// editButton.innerHTML = "Edit Task";
// smallCover.appendChild(editButton);

// editButton.onclick = function () {
//     let newTaskDiv = document.getElementsByClassName("newTaskDiv");
//     newTaskDiv[0].innerHTML = document.getElementById("input").value;
// }

//set time
// let time = document.createElement("div");
// time.setAttribute("class", "time");
// Cover.appendChild(time);

// let date = new Date();
// let day = date.getDate();
// let month = date.getMonth();
// let year = date.getFullYear();
// let hour = date.getHours();
// let minute = date.getMinutes();
// let second = date.getSeconds();

// let timeText = document.createElement("p");
// timeText.innerHTML = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
// time.appendChild(timeText);
// smallCover.appendChild(time);

// button.addEventListener("click", function () {
//     let input = document.getElementById("input").value;
//     let task = document.createElement("div");
//     task.setAttribute("class", "task");
//     Cover.appendChild(task);
    
//     let taskText = document.createElement("div");
//     taskText.setAttribute("class", "taskText");
//     taskText.innerHTML = input;
//     task.appendChild(taskText);
    
//     let taskButton = document.createElement("button");
//     taskButton.setAttribute("class", "taskButton");
//     taskButton.innerHTML = "Delete";
//     task.appendChild(taskButton);
    
//     taskButton.addEventListener("click", function () {
//         task.remove();
//     });
// });