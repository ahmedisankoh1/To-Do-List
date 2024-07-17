// Get references to HTML elements
const taskInput = document.getElementById('test-inputs');
const addTaskButton = document.getElementById('btn');
const taskList = document.getElementById('list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', deleteTask);

    // Mark task as complete when clicked
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Function to delete a task
function deleteTask(event) {
    const taskToDelete = event.target.parentElement;
    taskList.removeChild(taskToDelete);
}

// Event listener for the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Optional: Add task when pressing Enter key
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
