const uiManagement = (() => {
    const add = (todo) => {
        document.getElementById("lista").innerHTML += '<input type="text" class="label-look" value="' + todo.value +'"> <button type="button">Edit</button> <button type="button">Borrar</button> <br>'
    }
    return {
        add
    }
})();

const data = (() => {
    //Initial Setup
   let todos = JSON.parse(localStorage.getItem("todos")) || [];
   (() => todos.forEach(todo => {
       uiManagement.add(todo);
   }))();
   
   const getTodos = () => {
    return todos;
    }
   const add = (todo) => {
       uiManagement.add(todo);
       todos.push(todo);
       localStorage.setItem('todos',JSON.stringify(getTodos()));
   }
   return {
       add,
       getTodos
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