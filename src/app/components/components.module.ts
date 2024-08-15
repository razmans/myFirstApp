import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TitleComponent],
  exports:[TitleComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ComponentsModule { }
