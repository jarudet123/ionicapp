import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

 titleName:string;
 productName:string;
 buttonName:string;

  constructor(public alerController: AlertController) { }

  ngOnInit() {
    this.titleName = 'รายการอาหาร' ;
    this.productName = 'ข้าวผัดไข่';
    this.buttonName = 'ราคา';
  }
  async presentAlert() {
    const alert = await this.alerController.create({
      header: 'ข้าวผัดพริก',
      subHeader: 'ราคาสินค้า',
      message: 'ราคา 50 บาท',
      buttons: ['ok']
    });
    

    await alert.present();
  }

async cancleAlert() {
  const alert = await this.alerController.create({
    message: 'ยกเลิกราคาสินค้า',
    buttons: ['ok']
  });
  

  await alert.present();
}
  

}
