import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  credenciais: CredenciaisDTO = {
    email: "",
    senha: ""
  }

  constructor(public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) {

  }

  public login() {
    this.auth.authenticate(this.credenciais)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'))
        this.navCtrl.setRoot('CategoriasPage');
      },
        error => { });
  }

  public ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  public ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'))
        this.navCtrl.setRoot('CategoriasPage');
      },
        error => { });

  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  singup() {
    this.navCtrl.push('SingupPage');
  }
}
