import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getToDos();
  }

  addToDo(todoText: HTMLInputElement){

    let obj ={
      text: todoText.value,
      createdAt: new Date()
    };
    this.todoService.addToDo(obj);
    todoText.value= '';
  }

  RemoveToDo(todo){
    this.todoService.RemoveToDo(todo);
  }

}
