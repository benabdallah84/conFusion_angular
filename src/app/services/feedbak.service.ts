import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../shared/feedback';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';



@Injectable({
  providedIn: 'root'
})
export class FeedbakService {

  contactObj: Feedback;

  constructor(private processHTTPMsgService: ProcessHTTPMsgService, private http: HttpClient) { }




  submitFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(baseURL + 'feedback', feedback)
      .pipe(catchError(this.processHTTPMsgService.handleError))
      .subscribe(feedback => { this.contactObj = feedback; })[0];
  }


}

