import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  c_id: string;
  c_name: string;
  c_lastname: string;
  c_address: string;
  c_tel: string;

  input_id: string;
  input_name: string;
  input_lastname: string;
  input_address: string;
  input_tel: string;

  customers: any;

  constructor() { }

  ngOnInit() {
    this.loaddata();
    axios.get('http://localhost/ionicserver/get_customer.php').then((response) => {

      console.log(response.data);
      this.c_id = response.data[0].c_id;
      this.c_name = response.data[0].c_name;
      this.c_lastname = response.data[0].c_lastname;
      this.c_address = response.data[0].c_address;
      this.c_tel = response.data[0].c_tel;

    })
      .catch((error) => {

        console.log(error);
      })
      .then(() => {

      });
  }
  register() {
    console.log('input_id:' + this.input_id);
    console.log('input_name:' + this.input_name);
    console.log('input_lastname:' + this.input_lastname);
    console.log('input_address:' + this.input_address);
    console.log('input_tel:' + this.input_tel);

    axios.post('http://localhost/ionicserver/add_customer.php', {
      c_id: this.input_id,
      c_name: this.input_name,
      c_lastname: this.input_lastname,
      c_address: this.input_address,
      c_tel: this.input_tel
    }).then((response) => {
      console.log(response);

      this.input_id = '';
      this.input_name = '';
      this.input_lastname = '';
      this.input_address = '';
      this.input_tel = '';

    }).catch((error) => {
      console.log(error);
    });
  }
  delete_data(id: any) {
    console.log(id);

    axios.get('http://localhost/ionicserver/delete_customer.php?id=' + id)
      .then(() => {
        console.log("ลบข้อมูลเรียบร้อย");
        this.loaddata();
      });
  }

  loaddata() {
    axios.get('http://localhost/ionicserver/get_customer.php').then((response) => {

      console.log(response.data);

      this.customers = response.data;

    })
      .catch((error) => {

        console.log(error);
      })
      .then(() => {

      });
  }
}