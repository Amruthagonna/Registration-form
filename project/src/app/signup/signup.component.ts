import { Component } from '@angular/core';
import { RegistrationServices } from '../services/registration.services';
import { Registration } from '../models/registration';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  student:Registration=new Registration();
constructor(private services:RegistrationServices){}
ngOnInit():void{}

submitting(){
  this.services.submit(this.student).subscribe(
    response => {
      console.log("successfully",response);
      Swal.fire("data is successfully inserted")
    },
    error=>{
      console.log("invaild",error);
      Swal.fire("data is not successfully inserted")
    }
  )
}
  
  }
  


