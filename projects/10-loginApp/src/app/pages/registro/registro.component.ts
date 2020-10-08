import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user : UserModel;

  constructor() { }

  ngOnInit() { 
    this.user = new UserModel();

    this.user.email = 'juanf.zuluagag@gmail.com';
  }
  
  onSubmit( form : NgForm){
    if(form.invalid) return;
    
    console.log("Enviando formulario");
    console.log("user", this.user);
    console.log("form", form);
  }

}