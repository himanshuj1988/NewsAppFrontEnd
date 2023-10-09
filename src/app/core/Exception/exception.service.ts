
import {of as observableOf, throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class ExceptionService {

  constructor(private router: Router) { }
  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    let res = <Response>errorResponse;
console.log(res);

       if(res.status === 0){  
    return observableOf();
    }else{
    }
    let err = res;
    // if (err.error) {
      return observableThrowError(err);
    //}

  }
}
