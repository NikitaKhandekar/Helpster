import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpsterComponent } from './helpster/helpster.component'
import { ShowHelpsterServicesComponent } from './helpster/show-helpster-services/show-helpster-services.component';
import { AddServiceComponent } from './helpster/add-service/add-service.component';
import { EditServiceComponent } from './helpster/edit-service/edit-service.component';
import { EditHelpsterInfoComponent } from './helpster/edit-helpster-info/edit-helpster-info.component';
import { DeleteHelpsterServiceComponent } from './helpster/delete-helpster-service/delete-helpster-service.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchServiceComponent } from './customer/search-service/search-service.component';
import { ShowAvailableServicesComponent } from './customer/show-available-services/show-available-services.component';
import { GiveFeedbackComponent } from './customer/give-feedback/give-feedback.component';
import { EditCustomerInfoComponent } from './customer/edit-customer-info/edit-customer-info.component';
import { GetBookingsComponent } from './customer/get-bookings/get-bookings.component';
import { GetHelpsterBookingsComponent } from './helpster/get-helpster-bookings/get-helpster-bookings.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { ViewServicesComponent } from './admin/view-services/view-services.component';
import { AdminLogoutComponent } from './admin/admin-logout/admin-logout.component';
import { ViewCustomersComponent } from './admin/view-customers/view-customers.component';
import { ViewHelpstersComponent } from './admin/view-helpsters/view-helpsters.component';
import { AddHelpsterComponent } from './admin/add-helpster/add-helpster.component';
import { ViewBookingsComponent } from './admin/view-bookings/view-bookings.component';
import { AddListedServiceComponent } from './admin/add-listed-service/add-listed-service.component';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './admin/update-customer/update-customer.component';
import { UpdateHelpsterComponent } from './admin/update-helpster/update-helpster.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { LoginHelpsterComponent } from './login-helpster/login-helpster.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterHelpsterComponent } from './register-helpster/register-helpster.component';
import {CustomerAuthGuardService} from '../app/app-services/customer-auth-guard.service';
import {HelpsterAuthGuardService} from '../app/app-services/helpster-auth-guard.service';

const routes: Routes = [
  {path:"", redirectTo:"/home" ,pathMatch:"full"},
  {path:"home",component:HomeComponent},

  { path:"registerCustomer" , component:RegisterCustomerComponent},

  { path:"registerHelpster" , component:RegisterHelpsterComponent},


  { path:"loginCustomer" , component:LoginCustomerComponent},

  { path:"loginHelpster" , component:LoginHelpsterComponent},
  
  { path:"logout" , component:LogoutComponent},
      

  {
    path:"helpster",
    component:HelpsterComponent,
    children:[ { path:"ShowHelpsterServices" , component:ShowHelpsterServicesComponent, canActivate:[HelpsterAuthGuardService]},
               { path:"AddService" , component:AddServiceComponent, canActivate:[HelpsterAuthGuardService]},
               { path:"EditService" , component:EditServiceComponent, canActivate:[HelpsterAuthGuardService]},
               { path:"DeleteService" , component:DeleteHelpsterServiceComponent, canActivate:[HelpsterAuthGuardService]},
               { path:"EditProfile" , component:EditHelpsterInfoComponent, canActivate:[HelpsterAuthGuardService]},
               { path:"ShowHelpsterBookings" , component:GetHelpsterBookingsComponent, canActivate:[HelpsterAuthGuardService]}
            ]
  },

  {
    path:"customer",
    component:CustomerComponent,
    children:[ 
                { path:"SearchServices" , component:SearchServiceComponent, canActivate:[CustomerAuthGuardService]},
                { path:"ShowAvailableServices" , component:ShowAvailableServicesComponent, canActivate:[CustomerAuthGuardService]},
                { path:"GiveFeedback" , component:GiveFeedbackComponent, canActivate:[CustomerAuthGuardService]},
                { path:"EditProfile" , component:EditCustomerInfoComponent, canActivate:[CustomerAuthGuardService]},
                { path:"ShowBookings" , component:GetBookingsComponent, canActivate:[CustomerAuthGuardService]}
            ]
  }
  ,
  {
    path:"admin",
    component:AdminComponent,
    children:[ 
                { path:"" , component:AdminLoginComponent},
                { path:"adminLogout" , component:AdminLogoutComponent},
                { path:"ViewServices" , component:ViewServicesComponent},
                { path:"AddListedService" , component:AddListedServiceComponent},
                { path:"ViewCustomers" , component:ViewCustomersComponent},
                { path:"AddCustomer" , component:AddCustomerComponent},
                { path:"AddHelpster" , component:AddHelpsterComponent},
                { path:"ViewHelpsters" , component:ViewHelpstersComponent},
                { path:"ViewBookings" , component:ViewBookingsComponent},
                { path:"UpdateCustomer" , component:UpdateCustomerComponent},
                { path:"UpdateHelpster" , component:UpdateHelpsterComponent}
            ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
