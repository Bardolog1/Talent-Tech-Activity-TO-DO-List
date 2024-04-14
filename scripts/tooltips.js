tippy('.addTaskBtn', {
    content: 'Add Task',
  });
  tippy('.filterAll', {
    content: 'Find All Tasks',
  });
  tippy('.filterActive', {
    content: 'Find Not Completed Tasks',
  });
  tippy('.filterCompleted', {
    content: 'Find Completed Tasks',
  });
  tippy('.clearCompleted', {
    content: 'Delete Completed Tasks',
  });
  tippy('.clearAll', {
    content: 'Delete All Tasks',
  });
  tippy('.save', {
    content: 'Save Tasks in Local Storage',
  });
  tippy('#counterAll', {
    content: 'All Tasks are: ' + countAllTasks(),
  });
  tippy('#counterActive', {
    content: 'Not Completed Tasks are: ' + countActiveTasks(),
  });
  tippy('#counterCheck', {
    content: 'Completed Tasks are: ' + countCompletedTasks(),
  });
  
  tippy('.check', {
    content: 'Mark as Completed',
  });
  
  tippy('.remove', {
    content: 'Delete Task',
  });
  
  tippy(".voidElement", {
    content: 'Please Add a Task!',
   });
  
  