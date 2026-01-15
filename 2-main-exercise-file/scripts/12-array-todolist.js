  const todoList = [
    {
      name:'watch tv',
      dueDate:'2028-12-05'
    },{ 
      name:'push code',
      dueDate:'2028-12-05'
    }
  ];

  renderTodoList();

  document.querySelector('.js-addTodo-btn')
   .addEventListener('click', () => {
      addTodo();
   })

function renderTodoList() {
  let todoHtml = '';

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    let html = `
      <div>${name}</div>
      <div>${dueDate}</div>  
      <button 
        class="delete-todo-btn js-delete-todo-btn">
        delete
      </button>
    `;
    todoHtml += html;
  });

  document.querySelector('.js-display-todo').innerHTML = todoHtml;

  document.querySelectorAll('.js-delete-todo-btn')
   .forEach((deleteBtn, index) => {
      deleteBtn.addEventListener('click', () => {
        todoList.splice(index,1); 
        renderTodoList();
      })
    })
};

  function addTodo() {

    let inputElem = document.querySelector('.js-input');
    let name = inputElem.value;

    let dateInputElem = document.querySelector('.js-date-input');
    let dueDate = dateInputElem.value;

    todoList.push({
      name:name, 
      dueDate:dueDate
      // name,
      // dueDate
    });

    inputElem.value = '';
    renderTodoList();
  };
