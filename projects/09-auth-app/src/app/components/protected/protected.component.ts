import { Component, OnInit } from '@angular/core';
import { Auth0Service } from 'src/app/services/auth0.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styles: [
  ]
})
export class ProtectedComponent implements OnInit {

  constructor(public _auth : Auth0Service) { }

  ngOnInit(): void {
  }

}
