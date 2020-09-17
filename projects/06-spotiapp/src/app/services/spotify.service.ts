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
    
  getQuery( query : string ) : any{
    
    const url = `https://api.spotify.com/v1/${ query }`; 

    const headers = new HttpHeaders({
      'Authorization' : '<-access_token->'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
            .pipe( map( (dataResponse : any) => dataResponse['albums'].items));
  }

  getArtist( searchTerm : string ){

    return this.getQuery(`search?q=${ searchTerm }&type=artist`)
              .pipe( map( (dataResponse : any) => dataResponse['artists'].items));
  }
}
