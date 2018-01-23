import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider, Bortforklaring, KategoriObj, Kategori } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-forklaring',
  templateUrl: 'forklaring.html',
})
export class ForklaringPage {

  bortforklaringar: Array<Bortforklaring> = [];
  //kategorier: Array<KategoriObj> = [];
  valdKategori: string = '';
  text: String = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider) {
  }

  ionViewDidLoad() {
    this.bortforklaringar = this.data.bortforklaringar;
  }

  ionViewDidEnter() {
    this.valdKategori = this.navParams.data;
    this.slumpaText();
  }

  slumpaText() {
    let filtreradeForklaringar = this.bortforklaringar.filter(bf => bf.kategorier.indexOf(Kategori[this.valdKategori]) > -1);
    let slumpadSiffra = this.randomIntFromInterval(0, filtreradeForklaringar.length - 1);
    this.text = filtreradeForklaringar[slumpadSiffra].forklaring;
  }

  getKategoriValue(kategoriTyp) {
    return Kategori[kategoriTyp];
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  slumpaNy() {
    this.slumpaText();
  }

  bytKategori() {
    this.navCtrl.popToRoot();
  }

}
