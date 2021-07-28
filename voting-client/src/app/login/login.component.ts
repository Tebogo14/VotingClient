import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceProxy } from 'src/services/voting-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UserService: UserServiceProxy,
    private router: Router) { }

  email: string;
  password: string
  token: any;

  ngOnInit(): void {
  }

  Login() {
    this.UserService.logInUser(this.email, this.password).subscribe((Response: any) => {
      console.log(Response.id);
      this.token = window.btoa(Response.id + ':' + Response.userId + ':' + Response.companyId);
      localStorage.setItem('token', JSON.stringify(this.token));

      this.router.navigate(["/Subject"]);
    })
  }


}
