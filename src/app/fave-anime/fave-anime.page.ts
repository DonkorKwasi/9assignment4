import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { faves } from '../faves.model';
import { FavesService } from '../faves.service';
@Component({
  selector: 'app-fave-anime',
  templateUrl: './fave-anime.page.html',
  styleUrls: ['./fave-anime.page.scss'],
})
export class FaveAnimePage implements OnInit {

  animes = this.faves.allFaves
  select: faves
  datapp: Promise<any>;
  constructor(private faves: FavesService, private data: DatabaseService) { }

  ngOnInit() {
    this.animes = this.faves.allFaves;
  }



  
 async delete()
  {
    await this.data.storage.remove('faves');
    this.animes = [];
    this.faves.allFaves = [];
  }
chose(anime)
{
  this.select = anime;
  console.log(this.select)
}

async swapUp()
{

  if(this.animes != undefined)
  {
    if(this.animes.length > 1)
    {
  console.log("did1")
          if(this.select != undefined)
          {
            console.log("did1")
                if(this.select == this.animes[0])
                {
                  //alert
                  console.log("did2")
                }
                else{
                  console.log("did1")
                  for(var i = 0; i< this.animes.length; i++)
                  {
                    if(this.animes[i] == this.select)
                    {
                      console.log(i);
                 var tmp =     this.animes[i-1]
                 this.animes[i-1] = this.select;
                 this.animes[i] = tmp;
                 this.animes[i].personalScore++;
                 this.animes[i-1].personalScore--;
               this.select = undefined;
               await this.data.storage.set('faves',this.animes);
  
                    }
                  }
                }
          }
          else
          {
  
  
          }
  
    } 
  else
  {
  }

  }
}
async swapDown()
{
if(this.animes != undefined)
{
  if(this.animes.length > 1)
  {
console.log("did1")
        if(this.select != undefined)
        {
          console.log("did1")
              if(this.select == this.animes[this.animes.length-1])
              {
                //alert
                console.log("did2")
              }
              else{
                console.log("did1")
                for(var i = 0; i< this.animes.length; i++)
                {
                  if(this.animes[i] == this.select)
                  {
                    console.log(i);
               var tmp =     this.animes[i+1]
               this.animes[i+1] = this.select;
               this.animes[i] = tmp;
               this.animes[i].personalScore--;
               this.animes[i+1].personalScore++;
             this.select = undefined;
             await this.data.storage.set('faves',this.animes);

                  }
                }
              }
        }
        else
        {


        }

  } 
else
{
  
}

}
}

refreshList()
{
  if(this.animes != undefined)
  {
  for(var i = 0; i < this.animes.length; i++)
  {
this.animes[i].personalScore = i+1;
  }
  }
}

}
