import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'esquadrao',
    loadChildren: () => import('./filmes/esquadrao/esquadrao.module').then( m => m.EsquadraoPageModule)
  },
  {
    path: 'cinderela',
    loadChildren: () => import('./filmes/cinderela/cinderela.module').then( m => m.CinderelaPageModule)
  },
  {
    path: 'filmes',
    loadChildren: () => import('./filmes/filmes.module').then( m => m.FilmesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
