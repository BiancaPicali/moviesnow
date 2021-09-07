import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CinderelaPage } from './cinderela.page';

const routes: Routes = [
  {
    path: '',
    component: CinderelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinderelaPageRoutingModule {}
