import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RefeicaoDetalhesPage } from './refeicao-detalhes';

@NgModule({
  declarations: [
    RefeicaoDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(RefeicaoDetalhesPage),
  ],
  exports: [
    RefeicaoDetalhesPage
  ]
})
export class RefeicaoDetalhesPageModule {}
