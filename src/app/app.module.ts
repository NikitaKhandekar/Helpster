import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelpsterComponent } from './helpster/helpster.component';
import { FormsModule } from '@angular/forms';
import { ShowHelpsterServicesComponent } from './helpster/show-helpster-services/show-helpster-services.component';
import { AddServiceComponent } from './helpster/add-service/add-service.component';
import { LoginService } from './app-services/login.service';
import { HelpsterService } from './app-services/helpster.service';
import { EditServiceComponent } from './helpster/edit-service/edit-service.component';
import { EditHelpsterInfoComponent } from './helpster/edit-helpster-info/edit-helpster-info.component';
import { DeleteHelpsterServiceComponent } from './helpster/delete-helpster-service/delete-helpster-service.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchServiceComponent } from './customer/search-service/search-service.component';
import { CustomerService } from './app-services/customer.service';
import { ShowAvailableServicesComponent } from './customer/show-available-services/show-available-services.component';
import { GiveFeedbackComponent } from './customer/give-feedback/give-feedback.component';
import { EditCustomerInfoComponent } from './customer/edit-customer-info/edit-customer-info.component';
import { GetBookingsComponent } from './customer/get-bookings/get-bookings.component';
import { GetHelpsterBookingsComponent } from './helpster/get-helpster-bookings/get-helpster-bookings.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminService } from './app-services/admin.service';
import { ViewServicesComponent } from './admin/view-services/view-services.component';
import { AddHelpsterComponent } from './admin/add-helpster/add-helpster.component';
import { ViewCustomersComponent } from './admin/view-customers/view-customers.component';
import { ViewHelpstersComponent } from './admin/view-helpsters/view-helpsters.component';
import { AdminLogoutComponent } from './admin/admin-logout/admin-logout.component';
import { ViewBookingsComponent } from './admin/view-bookings/view-bookings.component';
import { AddListedServiceComponent } from './admin/add-listed-service/add-listed-service.component';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './admin/update-customer/update-customer.component';
import { UpdateHelpsterComponent } from './admin/update-helpster/update-helpster.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { LoginHelpsterComponent } from './login-helpster/login-helpster.component';
import { RegisterHelpsterComponent } from './register-helpster/register-helpster.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { HelpsterAuthGuardService } from './app-services/helpster-auth-guard.service';
import { CustomerAuthGuardService } from './app-services/customer-auth-guard.service';
import { UserAuthGuardService } from './app-services/user-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpsterComponent,
    ShowHelpsterServicesComponent,
    AddServiceComponent,
    EditServiceComponent,
    EditHelpsterInfoComponent,
    DeleteHelpsterServiceComponent,
    LogoutComponent,
    CustomerComponent,
    SearchServiceComponent,
    ShowAvailableServicesComponent,
    GiveFeedbackComponent,
    EditCustomerInfoComponent,
    GetBookingsComponent,
    GetHelpsterBookingsComponent,
    HeaderComponent,
    AdminComponent,
    AdminLoginComponent,
    ViewServicesComponent,
    AddHelpsterComponent,
    ViewCustomersComponent,
    ViewHelpstersComponent,
    AdminLogoutComponent,
    ViewBookingsComponent,
    AddListedServiceComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    UpdateHelpsterComponent,
    LoginCustomerComponent,
    LoginHelpsterComponent,
    RegisterHelpsterComponent,
    RegisterCustomerComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,   
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [LoginService,HelpsterService,CustomerService,AdminService,HelpsterAuthGuardService,CustomerAuthGuardService,UserAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
