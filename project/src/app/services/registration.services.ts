import { HttpClient } from "@angular/common/http";
import { Registration } from "../models/registration";
import { Observable } from "rxjs";

export class RegistrationServices {
 
    private baseurl='https://sheetdb.io/api/v1/ph8n7dn7a0ukd';
    constructor(private http:HttpClient){}
    submit(user:Registration):Observable<any>{
        return this.http.post(this.baseurl,user);
    }
}
