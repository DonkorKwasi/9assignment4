import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'seasonal-search',
    loadChildren: () => import('./seasonal-search/seasonal-search.module').then( m => m.SeasonalSearchPageModule)
  },
  {
    path: 'fave-anime',
    loadChildren: () => import('./fave-anime/fave-anime.module').then( m => m.FaveAnimePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
