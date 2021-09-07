import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmesPage } from './filmes.page';

const routes: Routes = [
  {
    path: '',
    component: FilmesPage
  },
  {
    path: 'jungle-cruise',
    loadChildren: () => import('./jungle-cruise/jungle-cruise.module').then( m => m.JungleCruisePageModule)
  },
  {
    path: 'viuva-negra',
    loadChildren: () => import('./viuva-negra/viuva-negra.module').then( m => m.ViuvaNegraPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmesPageRoutingModule {}
