import { Component, OnInit, Output } from '@angular/core';
import {Input, EventEmitter} from '@angular/core';
import {Todo} from 'src/app/Todo_class'
 

@Component({
  selector: 'app-disp-todo',
  templateUrl: './disp-todo.component.html',
  styleUrls: ['./disp-todo.component.css']
})
export class DispTodoComponent implements OnInit {

  @Input() pass_todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter <Todo> = new EventEmitter();
  @Output() todoMark: EventEmitter <Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  del_todo(pass_todo: Todo){
    this.todoDelete.emit(pass_todo);
    console.log("del_todo has been triggered!")
  }
  onMark(pass_todo: Todo){
    this.todoMark.emit(pass_todo);
  }
  
}
