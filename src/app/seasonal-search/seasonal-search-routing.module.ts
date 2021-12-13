import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonalSearchPage } from './seasonal-search.page';

const routes: Routes = [
  {
    path: '',
    component: SeasonalSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeasonalSearchPageRoutingModule {}
