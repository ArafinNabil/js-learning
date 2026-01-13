  const todoList = [
    {
      name:'watch tv',
      dueDate:'2028-12-05'
    },{ 
      name:'push code',
      dueDate:'2028-12-05'
    }
  ];

  renderTodoList()

function renderTodoList() {
  let todoHtml = '';

  todoList.forEach(function (todoObject, index) {
    const {name, dueDate} = todoObject;
    let html = `
      <div>${name}</div>
      <div>${dueDate}</div>  
      <button class="delete-todo-btn"
        onclick="todoList.splice(${index},1); 
        renderTodoList();">delete
      </button>
    `;
    todoHtml += html;
  })

  document.querySelector('.js-display-todo').innerHTML = todoHtml;
}


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
