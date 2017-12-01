const listItem = document.getElementById("list").getElementsByTagName('li');
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener('click', completedTask);
    }

//Add Class Name .completed to mark task as completed
function completedTask() {
    if(this.className == "completed"){
        this.className = "";
    } else {
        this.className += "completed";
    }
}

const addNewTask = document.querySelector("input.addNewTask");
    addNewTask.addEventListener('keypress', (event) => {
        let key = event.which || event.keyCode; //looking for numerical key values
        if (key === 13) {
            let ul = document.getElementsByTagName('ul')[0]; //target the list
            let li = document.createElement('li'); //create new li element
            li.textContent = addNewTask.value; //grabs what user typed in
            ul.appendChild(li); //adds new li to the list
            addNewTask.value = addNewTask.defaultValue; //resets to placeholder txt 
        } 
    });
