import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquadraoPage } from './esquadrao.page';

const routes: Routes = [
  {
    path: '',
    component: EsquadraoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquadraoPageRoutingModule {}
