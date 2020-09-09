const uiManagement = (() => {

    const addEvents = (todos) => {
        todos.forEach(todo => {
            document.getElementById(todo.id).querySelector(".delete-button").addEventListener("click", () => {
                const elemento = document.getElementById(todo.id);
                elemento.parentNode.removeChild(elemento);
                data.deleteTodo(todo);
            })

            document.getElementById(todo.id).querySelector(".update-button").addEventListener("click", () => {
               const newValue = document.getElementById(todo.id).querySelector(".label-look").value;
               data.updateTodo(todo,newValue);

            })
        })
    }
    const add = (todo) => {
        document.getElementById("lista").innerHTML += '<div id="' + todo.id+ '"><input type="text" class="label-look" value="' + todo.value +
        '"> <button type="button" class="update-button">Edit</button> <button class="delete-button" type="button">Borrar</button> <br></div>'
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
    };

   const add = (todo) => {
       uiManagement.add(todo);
       todos.push(todo);
       localStorage.setItem('todos',JSON.stringify(getTodos()));
       uiManagement.addEvents(todos);
   };
   const deleteTodo = (todo) => {
        const todoIdx = todos.map(element => element.id).indexOf(todo.id);
        todos.splice(todoIdx, 1);
        localStorage.setItem('todos',JSON.stringify(getTodos()));
    };
    const updateTodo = (todo,newValue) => {
        console.log(todo);
        console.log(newValue);
        const todoIdx = todos.map(element => element.id).indexOf(todo.id);
        todos[todoIdx] = {
            id:todo.id,
            value:newValue
        }
        localStorage.setItem('todos',JSON.stringify(getTodos()));
    };


   
   return {
       add,
       getTodos,
       deleteTodo,
       updateTodo
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