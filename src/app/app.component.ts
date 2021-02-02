import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Helpster';

  constructor(private route: Router) { 
    route.events.subscribe( (event: Event) => {

      if (event instanceof NavigationStart) {
          this.updateMenu()
      }

      if (event instanceof NavigationError) {
          console.log(event.error);
      }
  });
  }

  ngOnDestroy(): void {
  }


  updateMenu() {
    let isLoggedIn: Boolean = localStorage.getItem("isUserLoggedIn") == "true";

    var aboutUsBtn = document.getElementById('about_us_btn');
    var loginBtn = document.getElementById('login_btn');
    var registerBtn = document.getElementById('register_btn');
    var menuBtn = document.getElementById('menu_btn');

    aboutUsBtn.style.display = isLoggedIn ? 'none' : 'block';
    loginBtn.style.display = isLoggedIn ? 'none' : 'block';
    registerBtn.style.display = isLoggedIn ? 'none' : 'block';
    menuBtn.style.display = isLoggedIn ? 'block' : 'none';
  }

  ngOnInit(): void {
    this.updateMenu()
  }

  signOut() {
    localStorage.setItem("isUserLoggedIn", "false");
    this.ngOnInit();
    this.route.navigate(['login']);
  }

}
