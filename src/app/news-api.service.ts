import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, map } from 'rxjs';
import { CONFIG } from './core/config';
import { ExceptionService } from './core/Exception/exception.service';

let getAllNews= CONFIG.apiUrls.newsall;
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '9b50f61fb50345ddb1b7612789ca00c6';
  private baseUrl= CONFIG.apiUrls.newsall;

  constructor(private http:HttpClient,private _exceptionService:ExceptionService) { }
  initSources():Observable<any>{
    //  return this.http.get<any>('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
     return this.http.get<any>(getAllNews).pipe(
            map((response: any) => response.data),
            catchError(this._exceptionService.catchBadResponse),
           );
  }
  initArticles(searchTerm:String):Observable<any>{
    var contentHeaders = new HttpHeaders()
    .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http
      .get<any>(
        `${this.baseUrl}News?searchTerm=${searchTerm}`
      )
    //   .subscribe(
    //     result => {
    //       debugger
    //       this.hackerNewsStories = result; 
          
    //       this.changeDetectorRef.detectChanges();
    // this.dataSource=new MatTableDataSource<HackerNewsStory>(this.hackerNewsStories);
    // this.dataSource.paginator = this.paginator;
    // this.obs = this.dataSource.connect();
    //     },
    //     error => console.error(error)
    //   );
  }
  getArticlesByID(source: String):Observable<any>{
   return this.http.get<any>('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
}
