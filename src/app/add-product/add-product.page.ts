import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  productid: string;
  productname: string;
  productprice: string;
  productdetail: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async addproduct() { 

    if(this.productid == undefined){
      console.log('กรุณากรอกข้อมูลรหัสสินค้า');

      this.alerterror('กรุณากรอกข้อมูลรหัสสินค้า')

    } else if(this.productname === undefined) {
      console.log('กรุณากรอกข้อมูลชื่อสินค้า');

      this.alerterror('กรุณากรอกข้อมูลชื่อสินค้า');

    } else if(this.productprice === undefined) {
      console.log('กรุณากรอกข้อมูลราคาสินค้า');

      this.alerterror('กรุณากรอกข้อมูลราคาสินค้า');

    } else if(this.productdetail === undefined) {
      console.log('กรุณากรอกข้อมูลรายละเอียดสินค้า');

      this.alerterror('กรุณากรอกข้อมูลรายละเอียดสินค้า');

    } else {
      axios.post('http://localhost/ionicserver/add_product.php', {
     productid: this.productid,
     productname: this.productname,
     productprice: this.productprice,
     productdetail: this.productdetail,
    }).then((response) => {
      console.log(response);
      this.productid = undefined;
      this.productname = undefined;
      this.productprice = undefined;
      this.productdetail = undefined;
      
      this.savesuccess();

    }).catch((error) => {
      console.log(error);
    });
    }
    
  }
 async savesuccess(){
  const alert = await this.alertController.create({
    header: 'สำเร็จ',
    message: 'บันทึกข้อมูลสินค้าเรียบร้อยแล้ว',
    buttons: ['OK']
  });

  await alert.present();

 }
 async alerterror(data: any){
  const alert = await this.alertController.create({
    header: 'คำเตือน',
    message: data,
    buttons: ['OK']
  });

  await alert.present();

 }

}