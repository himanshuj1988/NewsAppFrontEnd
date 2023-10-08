import { Injectable } from '@angular/core';
import { CONFIG } from '../core/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ExceptionService } from '../core/Exception/exception.service';
import { Observable, catchError, map } from 'rxjs';
import { HttpRequestConstants } from '../core/provider/http-request.provider';

let url = CONFIG.apiUrls.newsall;

@Injectable()

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http: HttpClient,
     private _httpRequestOptions: HttpRequestConstants,
    private _exceptionService: ExceptionService,) { }

    getClientSiteList(searchTerm:string):Observable<HackerNewsStory[]> {    
     return this._http.get<Observable<HackerNewsStory[]>>(`${url}News?searchTerm=${searchTerm}`,{
      headers:this._httpRequestOptions.RequestOptions() }).pipe(
      map((response: any) => response),
      catchError(this._exceptionService.catchBadResponse),)

  }


  
}


interface HackerNewsStory {
  title: string;
  by: string;
  url: string;
}
