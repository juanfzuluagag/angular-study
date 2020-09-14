import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-found',
  templateUrl: './heroes-found.component.html',
})
export class HeroesFoundComponent implements OnInit {
  textFound : string
  heroesFound: Heroe[];
  constructor(
    private _heroesService : HeroesService,
    private activateRoute : ActivatedRoute) { 

    }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.textFound = params['wordSearch'];
      this.heroesFound = this._heroesService.buscarHeroes(this.textFound);
    })
   
  }
}
