const newItem = () => {
    let listItem = document.createElement("li");  // creating html li
    let newTask = document.getElementById("taskInput").value; // obtain value of input box
    let textNode = document.createTextNode(newTask); // create input text
    listItem.appendChild(textNode); // add text as list item

    if(newTask === ""){
        alert("Please add a task")
    } else {
        document.getElementbyID("taskList").appendChild(listItem);  // show input text in browser as an li
    }
}