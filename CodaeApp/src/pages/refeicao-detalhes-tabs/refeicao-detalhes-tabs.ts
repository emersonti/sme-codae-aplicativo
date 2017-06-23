import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the RefeicaoDetalhesTabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-refeicao-detalhes-tabs',
  templateUrl: 'refeicao-detalhes-tabs.html'
})

export class RefeicaoDetalhesTabsPage {

  informacaoNutricionalRoot = 'InformacaoNutricionalPage'
  comentariosRoot = 'ComentariosPage'
  avaliarRoot = 'AvaliarPage'


  constructor(public navCtrl: NavController) {}

}
