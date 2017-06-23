import { RefeicaoDetalhesTabsPage } from './../refeicao-detalhes-tabs/refeicao-detalhes-tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the CardapioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */





@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {
  
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

  cameraOptions:  CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  getPhoto(){
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      alert('rolou com sucesso');
    }, (err) => {
      
      alert(err);
      console.log(err);      
    });
  }

  onCardClick(){
    this.navCtrl.push(RefeicaoDetalhesTabsPage);
    //alert('voce clicou na cartão');
  }

  onLikeClick(){
    alert('novo like');
  }



}
