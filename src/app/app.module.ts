import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { ShortlistComponent } from './shortlist/shortlist.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ServicesComponent,
    ShortlistComponent,
    ContactComponent,
    AboutComponent,
    SearchComponent,
    ResultComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
