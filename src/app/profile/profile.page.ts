import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name: string;
  lastname: string;
  detail: string;

  input_name: string;
  input_lastname: string;
  input_detail: string;

  constructor() { }

  ngOnInit() {
    axios.get('http://localhost/ionicserver/get_profiles.php').then((response) => {
      //handle success
        console.log(response.data);
        this.name = response.data[0].name;
        this.lastname = response.data[0].lastname;
        this.detail = response.data[0].detail;

      })
      .catch((error) => {
        // handle error
          console.log(error);
      })
      .then(() => {
        //always executed
      });
  }

  register(){
    console.log('input_name: ' + this.input_name);
    console.log('input_lastname: ' + this.input_lastname);
    console.log('input_detail: ' + this.input_detail);

    axios.post('http://localhost/ionicserver/register_profiles.php',{
      name: this.input_name,
      lastname: this.input_lastname,
      detail: this.input_detail
    }).then((response) => {
      console.log(response);
      this.input_name='';
      this.input_lastname='';
      this.input_detail='';
    }).catch((error) => {
      console.log(error);
    });

    
  }

}
