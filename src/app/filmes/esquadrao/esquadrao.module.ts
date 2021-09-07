import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsquadraoPageRoutingModule } from './esquadrao-routing.module';

import { EsquadraoPage } from './esquadrao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsquadraoPageRoutingModule
  ],
  declarations: [EsquadraoPage]
})
export class EsquadraoPageModule {}
