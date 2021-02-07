import { User } from "./user";



export class ListedService {
    serviceName : string="";
}

export class ListedCategory {
    cId : Number=0;
    cName : string="";
	associatedListedService : ListedService=new ListedService();
}
 
export class Service {

    serviceId : number=0;
    serviceName : string="";
    category : string="";
    description : string="";
    city : string="";
    locality : string="";
    availableDays : string[]=[];
    startTime : string="";
    endTime : string="";
    rating : number=0;
    associatedHelpster : User=new User();
}

export class SearchService {

    serviceName : string="";
    category : string="";
    city : string="";
    locality : string="";
}