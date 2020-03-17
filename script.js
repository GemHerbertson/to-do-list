// let closeBtn = document.getElementsByClassName("close");

const newItem = () => {
    let li = document.createElement("li");  // creating html li
    let newTask = document.getElementById("taskInput").value; // obtain value of input box
    console.log(newTask);
    let textNode = document.createTextNode(newTask); // create input text
    li.appendChild(textNode); // add text as list item

    if(newTask == ""){
        alert("Please add a task")
    } else {
        document.getElementbyID("taskList").appendChild(listItem);  // show input text in browser as an li
    }

    document.getElementById("taskInput").value = "";

    let closeSpan = document.createElement("span");
    let text = document.createTextNode("\u00D7");
    closeSpan.className = "close";
    closeSpan.appendChild(text);
    li.appendChild(closeSpan);

    // remove item when clicked
    for (i = 0; i < closeBtn.length; i++) {
        closeBtn[i].onclick = function () {
            let parentDiv = this.parentElement;
            parentDiv.style.display = "none";
        }
    }
}