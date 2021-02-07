import { Service } from "./Service";
import { User } from "./user";


export class Booking{
   
    bookingId:number=0;
    bookingDate:string="";
    associatedService:Service=new Service();
    associatedCustomer:User=new User();
    rating:number=-1;
    feedbackDescription:string="";
    
}


export class BookingFeedback{
   
    bookingId:number=0;
    rating:number=0;
    feedbackDescription:string="";
    
}