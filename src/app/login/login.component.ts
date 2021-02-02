import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HelpsterService } from '../helpster.service';
import { Login } from '../Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login('', '');

  constructor(private route: Router, private service: HelpsterService) {
  }

  ngOnInit(): void {
    var loginBtn = document.getElementById('login_btn');
    loginBtn.style.display = 'none';
  }

  onLogin(loginForm: NgForm) {
    let formErr = document.getElementById("form_err");
    this.login = loginForm.value;
    let email = this.login.email;
    let password = this.login.password;

    this.service.login(email, password)
      .subscribe(
        () => {
          this.route.navigate(['home'])
        },
        () => {
          formErr.style.display = 'block'
          formErr.textContent = "Username/Password is incorrect"
        }
      );
  }

}
