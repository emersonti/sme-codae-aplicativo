import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RefeicaoDetalhesTabsPage } from './refeicao-detalhes-tabs';
import { InformacaoNutricionalPage } from '../informacao-nutricional/informacao-nutricional';

@NgModule({
  declarations: [
    RefeicaoDetalhesTabsPage,
    InformacaoNutricionalPage,
  ],
  imports: [
    IonicPageModule.forChild(RefeicaoDetalhesTabsPage),
  ]
})
export class RefeicaoDetalhesTabsPageModule {}
