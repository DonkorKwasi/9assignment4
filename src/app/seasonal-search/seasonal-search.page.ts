import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { Observable } from 'rxjs';
import { FavesService } from '../faves.service';
import { faves } from '../faves.model';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { Data } from '@angular/router';
@Component({
  selector: 'app-seasonal-search',
  templateUrl: './seasonal-search.page.html',
  styleUrls: ['./seasonal-search.page.scss'],
})
export class SeasonalSearchPage implements OnInit {

  results: []
  year: string
  season: string
  datapp: Promise<any>;
  counter: number;
  favecnt: number
  current: faves
  constructor(private animes: AnimeService, private faves: FavesService, private alerts: AlertController, private data: DatabaseService) { }

  ngOnInit() {

    if(this.faves.allFaves != undefined )
    {
      this.favecnt = this.faves.allFaves.length;
    }
    else{
      this.favecnt = 0;
    }
  }
  async alertYear()
  {
    const alert = await this.alerts.create({
      header: 'Error',
      subHeader: 'Entry is not a number',
      message: 'In the year text box the entry must be numbers',
      buttons: ['OK']
    })
    await alert.present();
  }
  async alertSeason()
  {
    const alert = await this.alerts.create({
      header: 'Error',
      subHeader: 'Entry was not a season',
      message: 'the entry for the season texbox must be one of the 4 seasons ',
      buttons: ['OK']
    })
    await alert.present();
  }
 async search()
  {

var years = parseInt(this.year)

if(this.season !=undefined )
this.season = this.season.toLocaleUpperCase();
  if(isNaN(years) == false)
  {
if(this.season == 'SPRING' ||this.season == 'SUMMER' || this.season =='WINTER' || this.season == 'FALL')
{

  this.season = this.season.toLowerCase()
    this.counter = 0;
  this.datapp  =   this.animes.searchBySeason(this.year,this.season).toPromise();
  await this.datapp.then((datas)=>{
    this.results = datas.anime;
  }).catch((error)=>{
    console.log("call rejected " + JSON.stringify(error));
  });
  console.log(this.results);
  
}
else{
  this.alertSeason();
  this.season =""
}
  }
else{
  this.alertYear();
  this.year = ""

  }
}

  async add()
  {

this.favecnt++;
this.current = {
  img : this.results[this.counter]['image_url'],
  title :  this.results[this.counter]['title'],
  personalScore: this.favecnt
}
this.faves.allFaves.push(this.current);
var index = this.faves.allFaves.indexOf(this.current);
this.faves.allFaves[index].personalScore = index + 1;
await this.data.storage.set('faves',this.faves.allFaves);
  }
  next()
  {
   

    if(this.counter < this.results.length -1)
    this.counter++
    console.log(this.results.length);
    console.log(this.counter);
  


  }

  prev()
  {

    if(this.counter > 0)
    this.counter--; 
  }
}
