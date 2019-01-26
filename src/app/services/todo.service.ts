import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    {
      text: 'todo1',
      createdAt: new Date()
    },
    {
      text: 'todo2',
      createdAt: new Date()
    }
  ];

  constructor() { }

  getToDos(){
    return this.todos;
  }

  addToDo(obj){
    this.todos.push(obj);
  }

  RemoveToDo(todo: Todo){
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
