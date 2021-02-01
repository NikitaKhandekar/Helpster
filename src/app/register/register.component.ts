import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../Register';
import { ConfirmedValidator } from '../register/ConfirmedValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  register = new Register('', '', '', '');

  constructor(private fb: FormBuilder, private route: Router) {
    this.form = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength]],
      confirm_password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')

    })
  }

  get f(){
    return this.form.controls;

  }

  ngOnInit(): void {

    }

  onRegister() {
    this.register = this.form.value
    if(this.register.username == "nikita") {
      this.route.navigate(['home']);
    }
  }

}
