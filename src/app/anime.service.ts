import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
urlTitle = 'https://api.jikan.moe/v3/search/anime?q=';
urlTitle2 = '&page=1';
  constructor(private http: HttpClient) { }

searchByTitle(title: string)
{


  return this.http.get("https://api.jikan.moe/v3/search/anime?q=" + title + "&page=1");
  
    
  
}

searchBySeason(year: string, season: string)
{ 

 

  
  return this.http.get("https://api.jikan.moe/v3/season/" + year + "/"+ season);
  

}
}
