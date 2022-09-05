import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WheatherData } from '../models/wheather.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  constructor(private obj:HttpClient) { }
   getwheatherdata(cityName:string):Observable<WheatherData>{
      return this.obj.get<WheatherData>(environment.wheatherbaseurl,{
        headers:new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
        params:new HttpParams()
        .set('q',cityName)
        .set('units','matric')
        .set('mode','json')
        
      })
   }
}
