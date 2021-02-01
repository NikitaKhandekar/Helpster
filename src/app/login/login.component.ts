import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login('', '');

  constructor(private route: Router) {
    this.login;
  }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm) {
    let formErr = document.getElementById("form_err");
    this.login = loginForm.value;
    let username = this.login.username
    let password = this.login.password

    let validationName = "nikita";
    let validationPassword = "12345678";
    if (username == validationName && password == validationPassword) {
      this.route.navigate(['home']);
    } else {
      formErr.style.display = 'block'
      formErr.textContent = "Username/Password is incorrect"
    }
  }

}
