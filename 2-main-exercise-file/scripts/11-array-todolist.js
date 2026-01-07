  const todoList = ['watch tv', 'push code'];

  renderTodoList()

  function renderTodoList() {
    
    let todoHtml = '';

    for (let i = 0; i < todoList.length; i++) {
      const todo = todoList[i];
      html = `<p>${todo}</p>`;
      todoHtml += html ;
    
      document.querySelector('.js-display-todo').innerHTML = todoHtml;  
    };
  };

  function addTodo() {
    let inputElem = document.querySelector('.js-input');
    let name = inputElem.value;

    todoList.push(name);

    inputElem.value = '';
    renderTodoList();
  };
