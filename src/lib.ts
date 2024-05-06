
export default class Todo {
  description: string;
  completed: boolean;

  constructor(description: string) {
    this.description = description;
    this.completed = false;
  }

  toggle() {
    this.completed = !this.completed;
  }
  add(tasks:Todo[]){
    tasks.push(this)
  }

  remove(tasks:Todo[]){
    const index = tasks.findIndex((t:Todo) => t.description == this.description)
    
    if(index != -1){
        tasks.splice(index, 1)
        return 'Se ha eliminado la tarea'
    }else{
        return 'La tarea no esta en la lista'
    }
  }

  show(tasks: Todo[]){
    let mensaje='';

    for (let i=0; i<tasks.length; i++){
        mensaje += tasks[i].description +'/n '
    }

    return mensaje
}
}
