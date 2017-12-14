// Cleaned up my code a bit from the previous file. Toggle entry, create, mark as complete, and delete items on the list.  

// ----- VARIABLE SETUP -----
const plusIcon = document.querySelector("i.fa-plus");
const add = document.querySelector("input.addNewTask");
const listDiv = document.querySelector(".list");
const listUl = listDiv.querySelector('ul');


// ----- INPUT TOGGLE -----
plusIcon.addEventListener('click', () => {
    if (add.style.display == 'block') {
        add.style.display = 'none'; 
    } else {
        add.style.display = 'block';   
    }
});

// ----- CREATE NEW / SUBMIT WITH ENTER KEY -----
add.addEventListener('keypress', (event) => {
    let key = event.keyCode;
    if (key === 13) {
        if (add.value == "") {
            alert("You Must Enter a New Task!");
        } else {
            let ul = document.getElementsByTagName('ul')[0]; //target the list
            let li = document.createElement('li'); //create new li element
            li.innerHTML = '<i class="fa fa-trash"></i>' + add.value; //puts a icon infront of what user typed in for new li node
            ul.appendChild(li); //adds new li to the list
            add.value = add.defaultValue; //resets to placeholder txt   
        }
    }
});

// ----- ADDING '.COMPLETED' CLASS -----
listDiv.addEventListener('click', (event) => {
   if (event.target.tagName == "LI") {
        if (event.target.className == "completed") {
           event.target.className = "";
        } else {
           event.target.className = "completed";
        } 
   } 
});

// ----- REMOVE BY CLICKING TRASH CAN -----
listUl.addEventListener('click', (event) => {
   if (event.target.tagName == "I") {
       let li = event.target.parentNode;
       let ul = li.parentNode;
       ul.removeChild(li);
   } 
});
