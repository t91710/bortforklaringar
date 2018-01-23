import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider, Bortforklaring, KategoriObj } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  kategorier: Array<KategoriObj> = [];
  valdKategori:String = "";
  selectOptions;

  constructor(public navCtrl: NavController, private data: DataProvider) {
  }

  ionViewDidLoad() {
    this.kategorier = this.data.kategorier;
    this.selectOptions = {
      title: 'Välj kategori för bortförklaring'
    };
  }

  visaBortForklaring(kategori: string) {
    this.navCtrl.push('ForklaringPage', kategori);
  }
}
