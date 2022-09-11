import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  
  public signOut(){
    sessionStorage.clear()
    swal.fire('Sesion cerrada', "", 'success');
    setTimeout(() => {
      this.router.navigate(['login']);
    },
    1000);

  }


}
