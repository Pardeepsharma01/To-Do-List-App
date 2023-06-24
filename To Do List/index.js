// Get elements from the DOM
var taskInput = document.getElementById('taskInput');
var addButton = document.getElementById('addButton');
var taskList = document.getElementById('taskList');



let taskCounter = 0; // Initialize task counter

// Function to create a new task item
 function createTaskElement(taskText)
  {
    var taskItem = document.createElement('li');
    taskCounter++;

    taskItem.innerHTML = '<span class="task-number">' + taskCounter + '.</span><span class="task-text">' + taskText + '</span><span class="delete">X</span>';

    taskList.appendChild(taskItem);
    return taskItem;
 }

// Function to add a new task
function addTask()
 {
    var taskText = taskInput.value;
    if (taskText) 
    {
        var taskItem = createTaskElement(taskText);
        taskInput.value = '';

        // Add event listener to delete task on click
        var deleteButton = taskItem.querySelector('.delete');
        deleteButton.addEventListener('click', deleteTask);
    }
}

// Function to delete a task
function deleteTask(event) 
{
    var taskItem = event.target.parentNode;
    taskList.removeChild(taskItem);

    // Update task numbers
var taskItems = taskList.getElementsByTagName('li');
    for (let i = 0; i < taskItems.length; i++)
     {
        var taskNumber = taskItems[i].querySelector('.task-number');
        taskNumber.textContent = (i + 1) + '.';

    }
}


// Add event listener to the "Add" button
addButton.addEventListener('click', addTask);

// Add event listener to the Enter key press
taskInput.addEventListener('keydown', function (event) 
{
    if (event.key === 'Enter')
     {
        addTask();
    }
});
