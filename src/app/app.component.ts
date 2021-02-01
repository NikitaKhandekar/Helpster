import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Helpster';

  constructor() { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    //TODO: Read if user is loggedIn or not
    let isLoggedIn = false


    var aboutUsBtn = document.getElementById('about_us_btn');
    var loginBtn = document.getElementById('login_btn');
    var registerBtn = document.getElementById('register_btn');
    var menuBtn = document.getElementById('menu_btn');

    aboutUsBtn.style.display = isLoggedIn ? 'none' : 'block';
    loginBtn.style.display = isLoggedIn ? 'none' : 'block';
    registerBtn.style.display = isLoggedIn ? 'none' : 'block';
    menuBtn.style.display = isLoggedIn ? 'block' : 'none';

  }

}
