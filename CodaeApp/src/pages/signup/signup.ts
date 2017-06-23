import { CardapioPage } from './../cardapio/cardapio';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {  AngularFireAuth } from 'angularfire2/auth';

import { MainPage } from '../../pages/pages';


import { TranslateService } from '@ngx-translate/core';
import { User } from "../../models/user";


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };

  user = {} as User;

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService, 
    private afAuth: AngularFireAuth) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  async doSignup(user: User) {    
    // Attempt to login in through our User service
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.navCtrl.setRoot(CardapioPage);
    } catch (error) {
      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }  
  }



}
