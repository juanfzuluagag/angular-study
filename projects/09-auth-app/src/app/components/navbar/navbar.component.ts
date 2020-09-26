import { Component, OnInit } from '@angular/core';
import { Auth0Service } from "../../services/auth0.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(public auth : Auth0Service) { }

  ngOnInit(): void {
  }

}
