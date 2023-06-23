const Input = document.querySelector('#input');
const Button = document.querySelector('#button');
const Board = document.querySelector('#board');

const BtnEvent = (e) => {
  e.preventDefault();
  const task = Input.value;
  if (task) {
    addTasks(task);
    Input.value = '';
  }
};

Button.addEventListener('submit', BtnEvent);

function addTasks(task) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  taskItem.textContent = task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
}

function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}

taskList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    deleteTask(e.target.parentElement);
  }
});
