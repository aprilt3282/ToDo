var tasks = ["walk the dog", "go to the grocery store", "vacuum the house", "do the laundry"];
             
function createList(){
  //This function creates a list of tasks, prints to HTML
      
//select the #list-container element from HTML (add it to HTML)  
  var parent = document.getElementById("list-container")
 
  //Clear out exisitng contents
  parent.innerHTML=""
  
  //Create an <ul>node
  var ul = document.createElement("ul")
  
  for(var i =0; i<tasks.length; i++){
     console.log(tasks[i])
    
 
  //Create an <li> node
  var li = document.createElement("li")
 
  //Add the task string to the li
  li.innerHTML = (tasks[i])
  
  //Append the li to ul
  ul.appendChild(li)
  }
  
  //Append the ul to the #list-container
  parent.appendChild(ul)
  
  } 

function taskCreator(){
  console.log ("creating tasks")
  event.preventDefault();
  
  var form=document.querySelector("form");
  
  //Create a new task with form values
  var newTask = {task:form.first-name.value}
  
  //Insert new task into task
  tasks.push(newTask)
 
  //Trigger the list
  createList();
  
}

 window.onload = function(){   
  createList();
 }
 
 //Select the form and attach taskCreator as onsubmit handler
 var form=document.querySelector("form")
 form.onsubmit = taskCreator;