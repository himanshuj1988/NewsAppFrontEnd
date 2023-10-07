
import {of as observableOf, throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Injectable()
export class ExceptionService {

  constructor(private router: Router,private toastService:ToastService) { }
  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    let res = <Response>errorResponse;
console.log(res);

       if(res.status === 0){  
        this.toastService.activate("Oops! Something went wrong! Please contact system administrator. ");
    return observableOf();
    }else{
       this.toastService.activate("Oops! Something went wrong! Please contact system administrator. ");
    }
    let err = res;
    // if (err.error) {
      return observableThrowError(err);
    //}
    return observableOf();
  }
}
