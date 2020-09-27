import { Component, OnInit } from '@angular/core';
import { Auth0Service } from 'src/app/services/auth0.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styles: [
  ]
})
export class CallbackComponent implements OnInit {

  constructor( private _auth : Auth0Service) { }

  ngOnInit(): void {
    this._auth.handleRedirectCallback$;
  }

}
