//This array will add the tasks created in the desrctiption
var taskList = [];

function task(person, description, difficulty)
  {
    this.person = person;
    this.description = description;
    this.difficulty = difficulty;
  }
  
//assigns the level of difficulty of the task
function getFormData(){
  var person = document.querySelector('input[name="person"]:checked').value;
  var description = document.getElementById("description").value;
  var difficulty= document.getElementById("difficulty").value;
  
  var newTask = new task(person, description, difficulty);
  taskList.push(newTask);
  addToDoList();
}
//Adds the task that needs to be completed//
function addToDoList(){
  var ulTaskList = document.getElementById("toDoTasks"); 
  ulTaskList.innerHTML = "";
 
  for (var i =0; i<taskList.length; i++){
    var taskItem = taskList[i];
    var liTaskItem = document.createElement("li");
    
    //Concatenation of phrase//
    liTaskItem.innerHTML = taskItem.person + " has to " + taskItem.description + " which is a/an " + taskItem.difficulty +" task"; ulTaskList.appendChild(liTaskItem);
     
  }
  
  
  
  
  
}
  