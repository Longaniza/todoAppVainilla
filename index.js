const data = (() => {
   let todos = [];
   const add = (todo) => {
       todos.push(todo);
       console.log(todos);
   }
   return {
       add
   } 
})();
document.getElementById("add-todo").addEventListener("click", (event) => {
    event.preventDefault();
    const todo = document.querySelector("#fname").value;
    data.add(todo);
    document.getElementById("lista").innerHTML += '<input type="text" class="label-look" value="' + todo +'"> <button type="button">Edit</button> <button type="button">Borrar</button> <br>'
    
});
document.querySelector("label").addEventListener("click", () => {
    console.log("Jalo");
})