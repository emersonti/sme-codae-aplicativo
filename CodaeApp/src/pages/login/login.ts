import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {  AngularFireAuth } from 'angularfire2/auth';

import { MainPage } from '../../pages/pages';
import { CardapioPage } from './../cardapio/cardapio';

import { User } from '../../models/user';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  user = {} as User;

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,    
    private afAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  async doLogin(user: User) {
     try {
      let email = user.email;
      let senha = user.password;
      const result = await this.afAuth.auth.signInWithEmailAndPassword(email, senha);
      if(result){
        //this.navCtrl.push(MainPage);
        this.navCtrl.setRoot(CardapioPage);
      } else{
        let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
        });
        toast.present();
      }
    } catch (error) {
      alert('entrou no catch');
       let toast = this.toastCtrl.create({
        message: this.loginErrorString,        
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }




  ionViewCanEnter() {
   this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){       
       this.navCtrl.setRoot(CardapioPage);
       return false;
      }
    });
    return true;
  }

}
