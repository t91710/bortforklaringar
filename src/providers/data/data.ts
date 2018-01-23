//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider{

  /*constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }*/
  private _bortforklaringar: Array<Bortforklaring> = [];  

  constructor() {
    this.initieraBortforklaringar();
  }

  initieraBortforklaringar() {
    this._bortforklaringar.push({kategorier: [Kategori.SKIDOR, Kategori.LOPNING], forklaring: "Det är kallt idag"});
    this._bortforklaringar.push({kategorier: [Kategori.SKIDOR], forklaring: "Jag vallade fel i morse"});
    this._bortforklaringar.push({kategorier: [Kategori.SKIDOR], forklaring: "Det snöar"});
    this._bortforklaringar.push({kategorier: [Kategori.SKIDOR], forklaring: "Spåren är inte dragna"});
    this._bortforklaringar.push({kategorier: [Kategori.CARDIOCROSS, Kategori.GYM], forklaring: "Det är äckligt med all svett"});
    this._bortforklaringar.push({kategorier: [Kategori.CARDIOCROSS], forklaring: "Jag är inte nog cool för blandade småskutt"});
    this._bortforklaringar.push({kategorier: [Kategori.CARDIOCROSS], forklaring: "Det är fullbokat"});
    this._bortforklaringar.push({kategorier: [Kategori.LOPNING], forklaring: "Höften strular"});
    this._bortforklaringar.push({kategorier: [Kategori.LOPNING], forklaring: "Foten strular"});
    this._bortforklaringar.push({kategorier: [Kategori.LOPNING], forklaring: "Katten kissade på dojjorna igår"});
    this._bortforklaringar.push({kategorier: [Kategori.SIMNING], forklaring: "Jag är gjord av socker och kan inte bli blöt"});
    this._bortforklaringar.push({kategorier: [Kategori.SIMNING], forklaring: "Jag är för snabb"});
    this._bortforklaringar.push({kategorier: [Kategori.SIMNING], forklaring: "Man kan visst vara portad från badhuset"});
    this._bortforklaringar.push({kategorier: [Kategori.BASTU], forklaring: "Jag är en tönt"});
    this._bortforklaringar.push({kategorier: [Kategori.INNEBANDY], forklaring: "Man är ju inte 20 längre"});
    this._bortforklaringar.push({kategorier: [Kategori.INNEBANDY], forklaring: "Ni skulle inte vilja se mig med en klubba"});
    this._bortforklaringar.push({kategorier: [Kategori.INNEBANDY], forklaring: "För mesig sport. Hockey ska det vara."});
    this._bortforklaringar.push({kategorier: [Kategori.HOCKEY], forklaring: "Grickerna du vet..oslipade."});
    this._bortforklaringar.push({kategorier: [Kategori.HOCKEY], forklaring: "Glömde suspen"});
    this._bortforklaringar.push({kategorier: [Kategori.GYM], forklaring: "Man blir så rädd av att vara där"});
    this._bortforklaringar.push({kategorier: [Kategori.GYM], forklaring: '"Är man stark måste man vara snäll" --> Jag kan ju inte gå och bli snäll'});
  }

  public get bortforklaringar(): Array<Bortforklaring> {
    return this._bortforklaringar;
  }
  public get kategorier(): Array<KategoriObj> {
    let kategorier: Array<KategoriObj> = [];
    for ( let kategori in Kategori) {
      kategorier.push({typ: kategori, varde: Kategori[kategori]});
    }
    return kategorier;
  }
}
export interface KategoriObj {
  typ: String,
  varde: String
}
export interface Bortforklaring {
  kategorier: Kategori[],
  forklaring: String,
}
export enum Kategori {
  SKIDOR = 'Skidor',
  CARDIOCROSS = 'CardioX',
  LOPNING = 'Löpning',
  SIMNING = 'Simning',
  BASTU = 'Bastu',
  INNEBANDY = 'Innebandy',
  HOCKEY = 'Hockey',
  GYM = 'Gym'
}