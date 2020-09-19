import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from "@ionic/angular";
import { TodoList } from 'src/app/models/todo-list.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  

  constructor( public _todoService : TodoService,
    private router : Router,
    private alertController: AlertController) {
  }

  async addNewTodo(){

    
    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Name list'
        }
      ],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler : () => {
          console.log('Cancelando...');
        }
      },
      {
        text: 'Crear',
        handler: (data) =>{
          console.log(data);
          if (data.title.length === 0) {
            return;
          }
            const idList = this._todoService.createList(data.title);

            this.router.navigateByUrl(`/tabs/tab1/add/${ idList }`);
        }
      }]
    });

    alert.present();
  }

}
