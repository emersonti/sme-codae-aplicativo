import { PesquisarCardapioPage } from './../pesquisar-cardapio/pesquisar-cardapio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CardapioPage } from './../cardapio/cardapio';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  //cardapioPage: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.cardapioPage = CardapioPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showCardapio(){
    this.navCtrl.setRoot(CardapioPage);
  }

  pesquisarCardapio(){
    this.navCtrl.push(PesquisarCardapioPage);
  }

  login(){
    this.navCtrl.setRoot(CardapioPage);
  }

}
