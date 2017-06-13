import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformacaoNutricionalPage } from './informacao-nutricional';

@NgModule({
  declarations: [
    InformacaoNutricionalPage,
  ],
  imports: [
    IonicPageModule.forChild(InformacaoNutricionalPage),
  ],
  exports: [
    InformacaoNutricionalPage
  ]
})
export class InformacaoNutricionalPageModule {}
