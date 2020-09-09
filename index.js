const uiManagement = (() => {

    const addEvents = (todos) => {
        todos.forEach(todo => {
            document.getElementById(todo.id).querySelector(".delete-button").addEventListener("click", () => {
                const elemento = document.getElementById(todo.id);
                elemento.parentNode.removeChild(elemento);
                data.deleteTodo(todo);
            })
        })
    }
    const add = (todo) => {
        document.getElementById("lista").innerHTML += '<div id="' + todo.id+ '"><input type="text" class="label-look" value="' + todo.value +
        '"> <button type="button">Edit</button> <button class="delete-button" type="button">Borrar</button> <br></div>'
    }
    return {
        add,
        addEvents,
    }
})();

const data = (() => {
    //Initial Setup
   let todos = JSON.parse(localStorage.getItem("todos")) || [];
   (() => todos.forEach(todo => {
       uiManagement.add(todo);
   }))();

   (() => uiManagement.addEvents(todos))();
   
   const getTodos = () => {
    return todos;
    }

   const add = (todo) => {
       uiManagement.add(todo);
       todos.push(todo);
       localStorage.setItem('todos',JSON.stringify(getTodos()));
       uiManagement.addEvents(todos);
   }
   const deleteTodo = (todo) => {
        const todoIdx = todos.map(element => element.id).indexOf(todo.id);
        todos.splice(todoIdx, 1);
        localStorage.setItem('todos',JSON.stringify(getTodos()));
    }

   
   return {
       add,
       getTodos,
       deleteTodo
   } 
})();





document.getElementById("add-todo").addEventListener("click", (event) => {
    event.preventDefault();
    const todo = {
        id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
        value:document.querySelector("#fname").value 
    }
    data.add(todo);
});