import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { TodoList } from 'src/app/models/todo-list.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() finished = true;
  @ViewChild( IonList ) lista = IonList;

  constructor(public _todoService : TodoService,
    private router : Router,
    private alertController: AlertController) { }

  ngOnInit() {}

  selectedList( todoList : TodoList) {
    let redirect  = (this.finished)? '/tabs/tab2/add/': '/tabs/tab1/add/';
    this.router.navigateByUrl(`${ redirect }${ todoList.id }`);
  }
  
  deleteList(list : TodoList){
    this._todoService.deleteList(list);
  }

  async editNameList(todoList : TodoList){

    const alert = await this.alertController.create({
      header: 'Edit TodoList Title',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value : todoList.title
        }
      ],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler : () => {
          return;
          this.lista.closeSlidingItems();
        }
      },
      {
        text: 'Ok',
        handler: (data) =>{
          console.log(data);
          if (data.title.length === 0) {
            return;
          }
          this._todoService.editNameList(todoList, data.title);
          this.lista.closeSlidingItems();
        }
      }]
    });
    
    alert.present();
  }

}
