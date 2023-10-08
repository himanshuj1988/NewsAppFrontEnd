import { HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable, Provider} from '@angular/core';

@Injectable()
export class  HttpRequestConstants {

  RequestOptions():HttpHeaders {
    const contentHeaders = new HttpHeaders()
    .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'bearer '+ localStorage.getItem("token_ls"))
      .set('Access-Control-Allow-Origin', '*');
      

      return contentHeaders;
  }
}