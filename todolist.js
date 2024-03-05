/*ToDo List with Categories Overview: Build a ToDo list application 
that allows users to categorize tasks and mark them as completed.
 Tasks and categories should be represented as objects.

Requirements: 
Create functions to add tasks to the ToDo list with specified categories.
Implement a function to display tasks grouped by their categories. 
Develop a function to mark tasks as completed.
 Ensure tasks can be removed from the list.
*/

// ToDoList object to store tasks and categories
const ToDoList = {
    tasks: [],
    categories: [],
  };
  
  // Function to add a task with a specified category to the ToDo list
  function addTask(title, category) {
    const task = {
      title,
      category,
      completed: false,
    };
  
    ToDoList.tasks.push(task);
  
    // Add the category to the list if it doesn't exist
    if (!ToDoList.categories.includes(category)) {
      ToDoList.categories.push(category);
    }
  
    console.log(`Task "${title}" added to category "${category}".`);
  }
  
  // Function to display tasks grouped by categories
  function displayTasksByCategory() {
    ToDoList.categories.forEach((category) => {
      console.log(`\nCategory: ${category}`);
      const tasksInCategory = ToDoList.tasks.filter((task) => task.category === category);
  
      tasksInCategory.forEach((task) => {
        const status = task.completed ? 'Completed' : 'Not Completed';
        console.log(`- ${task.title} (${status})`);
      });
    });
  }
  
  // Function to mark a task as completed
  function markTaskAsCompleted(title) {
    const task = ToDoList.tasks.find((task) => task.title === title);
  
    if (task) {
      task.completed = true;
      console.log(`Task "${title}" marked as completed.`);
    } else {
      console.log(`Task "${title}" not found.`);
    }
  }
  
  // Function to remove a task from the ToDo list
  function removeTask(title) {
    const index = ToDoList.tasks.findIndex((task) => task.title === title);
  
    if (index !== -1) {
      ToDoList.tasks.splice(index, 1);
      console.log(`Task "${title}" removed from the ToDo list.`);
    } else {
      console.log(`Task "${title}" not found.`);
    }
  }
  
  // Example Usage:
  addTask('JavaScript assignments practice', 'Assignments');
  addTask('codecademy course javascript', 'Codecademy');
  addTask('JavaScript and DOM Manipulation from week5', 'canvas');
  addTask('Foundation Projects', 'Intranet projects from ALU');
  
  console.log('\n To Do List:');
  displayTasksByCategory();
  
  markTaskAsCompleted('JavaScript assignments practice');
  
  console.log('\nUpdated To Do List after marking task as completed:');
  displayTasksByCategory();
  
  removeTask('JavaScript assignments practice');
  
  console.log('\nUpdated To Do List after removing a task:');
  displayTasksByCategory();
  