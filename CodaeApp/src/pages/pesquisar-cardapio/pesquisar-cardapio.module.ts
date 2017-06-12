import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisarCardapioPage } from './pesquisar-cardapio';

@NgModule({
  declarations: [
    PesquisarCardapioPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisarCardapioPage),
  ],
  exports: [
    PesquisarCardapioPage
  ]
})
export class PesquisarCardapioPageModule {}
