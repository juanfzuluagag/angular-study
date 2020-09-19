import { Injectable } from '@angular/core';
import { TodoList } from '../models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList : TodoList[] = [];

  constructor() {

    this.loadStorage();
   }

   createList(title: string){
     const newList = new TodoList(title);
     this.todoList.push(newList);
     this.saveStorage();
     return newList.id;
   }

   saveStorage(){
      localStorage.setItem('data', JSON.stringify(this.todoList))
   }

   loadStorage(){
     if (localStorage.getItem('data')) {
      this.todoList = JSON.parse( localStorage.getItem('data') );
     }
   }

   getListById(id : string | number){
     id = Number(id);
     return this.todoList.find( listData => listData.id === id);
   }
}
