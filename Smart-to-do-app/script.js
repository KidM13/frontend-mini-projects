const addBtn = document.getElementById('add-btn');
const uncompletedList = document.querySelector('.uncompleted-list');
const completedList = document.querySelector('.completed-list');

addBtn.addEventListener('click', () => {
  const task = prompt('Enter a task:');
  if (!task) return;

  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');

  const taskText = document.createElement('span');
  taskText.textContent = task;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  taskItem.appendChild(taskText);
  taskItem.appendChild(checkbox);

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      taskText.style.textDecoration = 'line-through';
      completedList.appendChild(taskItem);
    } else {
      taskText.style.textDecoration = 'none';
      uncompletedList.appendChild(taskItem);
    }
  });

  uncompletedList.appendChild(taskItem);
});