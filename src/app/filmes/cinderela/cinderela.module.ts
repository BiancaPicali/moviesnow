import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CinderelaPageRoutingModule } from './cinderela-routing.module';

import { CinderelaPage } from './cinderela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CinderelaPageRoutingModule
  ],
  declarations: [CinderelaPage]
})
export class CinderelaPageModule {}
