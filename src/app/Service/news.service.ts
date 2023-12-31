import { Injectable } from '@angular/core';
import { CONFIG } from '../core/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ExceptionService } from '../core/Exception/exception.service';
import { Observable, catchError, map } from 'rxjs';
import { HttpRequestConstants } from '../core/provider/http-request.provider';
import { HackerNewsStory } from '../core/modal/hackernewsinterface';
let url = CONFIG.apiUrls.newsall;

@Injectable()

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http: HttpClient,
     private _httpRequestOptions: HttpRequestConstants,
    private _exceptionService: ExceptionService) { }

/*  
Created By :Himanshu Joshi
Created On : 08-10-2023
Description: This service function makes and API call to pull all the data from News Server
*/

    getAllNews(searchTerm:string):Observable<HackerNewsStory[]> {    
     return this._http.get<Observable<HackerNewsStory[]>>(`${url}searchTerm=${searchTerm}`,{
      headers:this._httpRequestOptions.RequestOptions() }).pipe(
      map((response: any) => response),
      catchError(this._exceptionService.catchBadResponse),)

  }
  
}
