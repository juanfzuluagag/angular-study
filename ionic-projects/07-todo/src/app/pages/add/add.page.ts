import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoItem } from 'src/app/models/todo-item.model';
import { TodoList } from 'src/app/models/todo-list.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  
  todoList : TodoList;
  itemName : string;
  constructor( private _todoService : TodoService,
    private activateRoute : ActivatedRoute) { 

      const idList = this.activateRoute.snapshot.paramMap.get('idList')
      this.todoList = _todoService.getListById(idList);

  }

  ngOnInit() {
  }

  addNewItem(){
    if (this.itemName.length === 0) {
      return;
    }

    console.log("agregando nuevo item")
    const newItem = new TodoItem( this.itemName );
    this.todoList.items.push(newItem);
    this._todoService.saveStorage();
    this.itemName = "";
  }
  
  changeCheck( itemList : TodoItem){
    console.log("cambiando estado...", itemList);

    const pending = this.todoList.items.filter(todoItem => !todoItem.complete).length;

    if (pending === 0) {
      this.todoList.finished = true;
      this.todoList.dateFinished = new Date();
    }else{
      this.todoList.finished = false;;
      this.todoList.dateFinished = null;
    }
    this._todoService.saveStorage();
  }
}
