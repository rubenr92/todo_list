import Todo from './lib';

const todo = new Todo('Arreglar tsconfig.json y package.json');
console.log(todo.completed); // false
todo.toggle();
console.log(todo.completed); // true
todo.toggle();
console.log(todo.completed); // false
todo.toggle();
console.log(todo.completed); // false
console.log('hola mundo!');

/*function crearTarea(){
    let tarea = document.getElementById('tarea').value
    const todo = new Todo(tarea)
}
function eliminarTarea(){
    let tarea = document.getElementById('tarea').value
    Todo.remove()
}

function mostrarTareas(){
    let tarea = document.getElementById('tarea').value
    Todo.show()
}
*/


