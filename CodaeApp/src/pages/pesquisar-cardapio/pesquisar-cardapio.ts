import { CardapioPage } from './../cardapio/cardapio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PesquisarCardapioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pesquisar-cardapio',
  templateUrl: 'pesquisar-cardapio.html',
})
export class PesquisarCardapioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisarCardapioPage');
  }

  gotoCardapio(){
    this.navCtrl.push(CardapioPage);
  }

}
