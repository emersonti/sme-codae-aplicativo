import { PesquisarCardapioPage } from './../pesquisar-cardapio/pesquisar-cardapio';
import { AngularFireAuth } from 'angularfire2/auth';
import { CardapioPage } from './../cardapio/cardapio';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth) { }

  login() {
    
     this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){       
         this.navCtrl.setRoot(CardapioPage);
      } else {
        this.navCtrl.push(LoginPage);
      }
    });
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  pesquisarCardapio(){
    this.navCtrl.push(PesquisarCardapioPage);
  }

  // ionViewCanEnter() {
  //  this.afAuth.authState.subscribe(data => {
  //     if (data && data.email && data.uid){       
  //      this.navCtrl.setRoot(CardapioPage);
  //      return false;
  //     }
  //   });
  //   return true;
  // }


}
