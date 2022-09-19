import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/models/register-data';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Registrate';
  register: Boolean = false;
  // constructor(private router: Router, private ) { }

    // constructor(private router: Router, private ) { }
  registerData: RegisterData = new RegisterData('','','','','',1);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('tipo')){
    }
  }

  registro():any{
    
    this.userService.createUser(this.registerData).subscribe((response)=>{
      console.log(response)
    })
  }


}