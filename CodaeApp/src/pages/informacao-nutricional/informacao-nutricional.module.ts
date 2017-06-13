import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformacaoNutricionalPage } from './informacao-nutricional';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    InformacaoNutricionalPage,
  ],
  imports: [
    IonicPageModule.forChild(InformacaoNutricionalPage),
    RoundProgressModule
  ],
  exports: [
    InformacaoNutricionalPage
  ]
})
export class InformacaoNutricionalPageModule {}
