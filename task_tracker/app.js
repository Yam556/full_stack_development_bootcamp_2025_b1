const taskSubmitBtn = document.getElementById('task_submit');
taskSubmitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const taskElement = document.getElementById('task');
  const value = taskElement.value;
  console.log(value);

  document.querySelector('ul').innerHTML +=
    "<li> <input type= 'checkbox'>" +
    value +
    '<li><button><i class="fa-solid fa-trash-can"></i></button>';
});
