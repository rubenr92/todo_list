import Todo from '../lib';

describe('Todo', () => {
  it('should create a new todo with the correct description', () => {
    const todo = new Todo('Buy groceries');
    expect(todo.description).toBe('Buy groceries');
  });

  it('should create a new todo with the completed property set to false', () => {
    const todo = new Todo('Buy groceries');
    expect(todo.completed).toBe(false);
  });

  it('should toggle the completed property of the todo', () => {
    const todo = new Todo('Buy groceries');
    todo.toggle();
    expect(todo.completed).toBe(true);
    todo.toggle();
    expect(todo.completed).toBe(false);
  });

  it('should erase a todo from the list', () => {
    const tareas = []
    const todo = new Todo('Buy groceries');
    tareas.push(todo)
    const resultado = todo.remove(tareas)
    expect(resultado).toBe('Se ha eliminado la tarea')
    expect(tareas.length).toBe(0)
  });

  it('should show the tasks stored in a list', ()=>{
    const tareas = []
    const todo = new Todo('Buy groceries');
    tareas.push(todo)
    expect(todo.show(tareas)).toBe('Buy groceries/n ')
    const todo2 = new Todo('Study for the exam')
    tareas.push(todo2)
    expect(todo.show(tareas)).toBe('Buy groceries/n Study for the exam/n ')
  })

});


