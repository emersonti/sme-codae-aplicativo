import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvaliarPage } from './avaliar';

@NgModule({
  declarations: [
    AvaliarPage,
  ],
  imports: [
    IonicPageModule.forChild(AvaliarPage),
  ],
  exports: [
    AvaliarPage
  ]
})
export class AvaliarPageModule {}
