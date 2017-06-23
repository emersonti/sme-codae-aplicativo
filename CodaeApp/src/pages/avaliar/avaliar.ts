import { SignupPage } from './../signup/signup';
import { LoginPage } from './../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AvaliarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-avaliar',
  templateUrl: 'avaliar.html',
})
export class AvaliarPage {
  sabor: number = 5;
  variedade: number = 5;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth, 
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliarPage');
  }
  
  enviarAvaliacao(){
    
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){       
         this.presentAlert();
      } else {
        this.presentConfirm();        
      }
    });

  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      subTitle: 'O seu comentário foi enviado com sucesso.',
      buttons: ['Dismiss']
    });
    alert.present();
  }


  

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Erro',
      message: 'Comentário não Enviado. Você precisa esta logado. O que deseja fazer?',
      buttons: [
        {
          text: 'Login',          
          handler: () => {
            this.navCtrl.push(LoginPage);
          }
        },
        {
          text: 'Cadastrar',
          handler: () => {
            this.navCtrl.push(SignupPage);            
          }
        }, 
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            
          }
        }
      ]
    });
    alert.present();
  }




}
