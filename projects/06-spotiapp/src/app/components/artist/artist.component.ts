import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {
  
  artist : any  = {};
  topTracks : any[] = [];

  constructor(private spotify : SpotifyService,
    private activatedRoute : ActivatedRoute) {
      
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.callServiceGetArtistiById(params['id']);
      this.callServiceGetTopTrackByArtistId(params['id']);
    });
  }

  callServiceGetArtistiById(artistId : string){

    this.spotify.getArtistById(artistId)
      .subscribe((artist : any) => {
        console.log(artist);
        this.artist = artist});
  }

  callServiceGetTopTrackByArtistId(artistId : string) {

      this.spotify.getTopTracksByArtistId( artistId )
        .subscribe((topTracks : any) => {console.log("top-track",topTracks); this.topTracks = topTracks;})
  }

}
