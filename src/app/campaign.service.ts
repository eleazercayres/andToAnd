import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders   } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private http: HttpClient) { }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  uri = 'https://73fd5d1d-d3db-413e-8754-2a0dfe5d540a.mock.pstmn.io/';

  get(FinancedValue: string): Observable<any> {
   return  this.http.get(`${this.uri}/canpaign`).pipe();
  }

  getCampaignDeadLine(campaignId: number): Observable<any>{
    return this.http.get('https://2bc107d7-847b-4ce4-ac8d-8a4d4f761ce7.mock.pstmn.io/campaignDeadLine').pipe();
  }

  consolidateFinanced(period, campaignId, financedValue): Observable<any>{
    let res = '';
    const obj = {
        "campaignId":campaignId,
        "financedValue":financedValue
    }
    return this.http.post('https://d10dec9f-8f9b-4646-a183-049793a90f25.mock.pstmn.io/consolidateFinanced', obj).pipe();
  }

}
