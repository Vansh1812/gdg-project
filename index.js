function addTask(){
    var taskinput = document.getElementById("task input");
    var tasklist = document.getElementById("task list");
}if(taskinput.value === ''){
    alert("Please enter a task");
    return;
}
var li = document.createElement("li");
var textbook=document.createTextNode(taskinput.value);
li.appendChild(textbook);
var deletebutton=document.createElement("button");
deletebutton.innerHTML='Delete';
deletebutton.onclick=function(){
    tasklist.removeChild(li);
}
var completebutton=document.createElement("button");
completebutton.innerHTML='Complete';

completebutton.onclick=function(){
    li.classList.toggle('completed');
}
li.appendChild(deletebutton);
li.appendChild(completebutton);
tasklist.appendChild(li);
taskinput.value='';