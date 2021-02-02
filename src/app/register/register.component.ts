import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { HelpsterService } from '../helpster.service';
import { Register } from '../Register';
import { ConfirmedValidator } from '../register/ConfirmedValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  register = new Register('', '', '', '')

  constructor(private fb: FormBuilder, private route: Router, private service: HelpsterService) {
    this.form = fb.group({
      password: ['', [Validators.required, Validators.minLength]],
      confirm_password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern]],
      contact: ['', [Validators.required, Validators.minLength, Validators.maxLength]]

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
    this.service.registerHelpster(new User(
      this.register.email, 
      this.register.password,
      this.register.name, 
      this.register.contact)).subscribe(
        () => this.route.navigate(['login']),
        () => {}
      );
  }

}
