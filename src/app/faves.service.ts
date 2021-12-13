import { Injectable , OnInit} from '@angular/core';
import { faves } from './faves.model';
import { DatabaseService } from './database.service';
@Injectable({
  providedIn: 'root'
})
export class FavesService {

  constructor(private data: DatabaseService) {
    this.getall()

   }
  ngOnInit()
  {
    this.getall()
  }


  async getall() {

    if( await this.data.storage.length() > 0)
    {
    this.datapp =  this.data.storage.get('faves');
    
   
    await this.datapp.then((data) =>
    {
      this.allFaves = data;
    })
  
  }
      }


      datapp: Promise<any>;
allFaves: faves[] = [];

}
