import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeasonalSearchPageRoutingModule } from './seasonal-search-routing.module';

import { SeasonalSearchPage } from './seasonal-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeasonalSearchPageRoutingModule
  ],
  declarations: [SeasonalSearchPage]
})
export class SeasonalSearchPageModule {}
