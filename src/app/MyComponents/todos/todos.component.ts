import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo_class";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  localItem: string;
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }

   }

  ngOnInit(): void {
  }

  deleleTodoPar(pass_todo:Todo){
    console.log(pass_todo);
    const index = this.todos.indexOf(pass_todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(pass_todo: Todo){
    console.log(pass_todo)
    this.todos.push(pass_todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(pass_todo: Todo){
    const index = this.todos.indexOf(pass_todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
