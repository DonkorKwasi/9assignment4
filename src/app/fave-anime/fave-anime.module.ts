import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaveAnimePageRoutingModule } from './fave-anime-routing.module';

import { FaveAnimePage } from './fave-anime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaveAnimePageRoutingModule
  ],
  declarations: [FaveAnimePage]
})
export class FaveAnimePageModule {}
