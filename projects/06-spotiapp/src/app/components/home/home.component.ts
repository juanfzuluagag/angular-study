//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newReleases : any[];

  constructor(private spotify : SpotifyService){
  }

  ngOnInit(): void {
    this.spotify.getNewReleases()
      .subscribe(( responseData : any ) => {
        console.log(responseData);
        this.newReleases = responseData;
     });
  }


}
