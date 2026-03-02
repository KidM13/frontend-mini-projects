const addBtn = document.getElementById('add-btn');
const input = document.getElementById('task-input');
const uncompletedList = document.querySelector('.uncompleted-list .tasks');
const completedList = document.querySelector('.completed-list .tasks');
const liveCounter = document.getElementById('live-counter');

let totalTasks = 0;
let completedTasks = 0;

function updateCounter() {
  liveCounter.textContent = `${completedTasks}/${totalTasks} completed`;
}

addBtn.addEventListener('click', () => {
  const task = input.value.trim();
  if (!task) return;

  totalTasks++;
  updateCounter();
  input.value = '';

  const taskItem = document.createElement('div');
  taskItem.className = 'task-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskText = document.createElement('span');
  taskText.textContent = task;

  const menuBtn = document.createElement('button');
  menuBtn.textContent = '⋮';
  menuBtn.className = 'menu-btn';

  const dropdown = document.createElement('div');
  dropdown.className = 'dropdown hidden';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  dropdown.append(editBtn, deleteBtn);

  taskItem.append(checkbox, taskText, menuBtn, dropdown);
  uncompletedList.appendChild(taskItem);

  menuBtn.onclick = () => {
    dropdown.classList.toggle('hidden');
  };

  editBtn.onclick = () => {
    const newText = prompt('Edit task:', taskText.textContent);
    if (newText) taskText.textContent = newText;
    dropdown.classList.add('hidden');
  };

  deleteBtn.onclick = () => {
    if (checkbox.checked) completedTasks--;
    totalTasks--;
    taskItem.remove();
    updateCounter();
  };

  checkbox.onchange = () => {
    if (checkbox.checked) {
      completedTasks++;
      completedList.appendChild(taskItem);
    } else {
      completedTasks--;
      uncompletedList.appendChild(taskItem);
    }
    updateCounter();
  };
});