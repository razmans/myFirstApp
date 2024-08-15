import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NextPageRoutingModule } from './next-routing.module';

import { NextPage } from './next.page';
import { SalutationPipe } from '../components/salutation.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextPageRoutingModule,
    SalutationPipe
  ],
  declarations: [NextPage]
})
export class NextPageModule {}
