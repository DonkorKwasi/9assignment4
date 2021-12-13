import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaveAnimePage } from './fave-anime.page';

const routes: Routes = [
  {
    path: '',
    component: FaveAnimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaveAnimePageRoutingModule {}
