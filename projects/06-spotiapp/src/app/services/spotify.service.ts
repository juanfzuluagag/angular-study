import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("I'm Ready");
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBiy46q8p7aC_0DzInpihpAgzf69ju940ChS9twlfM7z7y7LBUc1HhxW90q7OeSVkYO8fphpwUDnLN9-uA'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe( map( (dataResponse : any) => {
        return dataResponse['albums'].items
      }) )
  }

  getArtist( searchTerm : string ){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBiy46q8p7aC_0DzInpihpAgzf69ju940ChS9twlfM7z7y7LBUc1HhxW90q7OeSVkYO8fphpwUDnLN9-uA'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ searchTerm }&type=artist`, { headers })
              .pipe( map( (dataResponse : any) =>{
                return dataResponse['artists'].items
              }));
  }
}
