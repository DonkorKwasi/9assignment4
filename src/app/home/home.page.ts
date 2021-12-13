import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeService } from '../anime.service';
import { faves } from '../faves.model';
import { FavesService } from '../faves.service';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private animes: AnimeService, private  faves: FavesService, private alerts: AlertController, private data: DatabaseService) {}
datas: Observable<any>;
title: string
datap: Promise<any>;
results: []
counter: number
current: faves
faveCnt: number
getcnt = []
getcntn : number
ngOnInit()
{
  
this.faveCnt = 0;
}

async alerttext()
{
  const alert = await this.alerts.create({
    header: 'Error',
    subHeader: 'text search needs 3 or more characters',
    message: 'a search cannot be done with 0, 1 or 2 characters, only 3 or more',
    buttons: ['OK']
  })
  await alert.present();
}

async search()
{

  

  if(this.title !=  undefined)
  {
  if(this.title.length > 2)
  {
 this.counter = 0;
this.datap =   this.animes.searchByTitle(this.title).toPromise();
 await this.datap.then((data)=>{
   this.results = data.results;
 }).catch((error)=>{
  console.log("call rejected " + JSON.stringify(error));
});

  console.log(this.results);
}
else{
this.alerttext();

}
  }
  else{
    this.alerttext()
  }

}

prev()
{
  if(this.counter > 0)
this.counter--; 
}

next()
{
  if(this.counter < this.results.length -1)
this.counter++
console.log(this.results.length);
console.log(this.counter);
}

 async add()
{
 
  


  this.faveCnt++;
  this.current = {
    img : this.results[this.counter]['image_url'],
    title :  this.results[this.counter]['title'],
    personalScore: this.faveCnt
}
this.faves.allFaves.push(this.current);
var index = this.faves.allFaves.indexOf(this.current);
this.faves.allFaves[index].personalScore = index + 1;
await this.data.storage.set('faves',this.faves.allFaves);
  }




}

