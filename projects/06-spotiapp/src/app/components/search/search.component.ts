import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  
  artists : any[];

  constructor(private spotify : SpotifyService) { }

  ngOnInit(): void {
  }

  searchArtist( searchTerm : string ){
    this.spotify.getArtist(searchTerm)
      .subscribe((responseData : any) => {
        console.log(responseData);
        this.artists = responseData;
      });
  }
}
