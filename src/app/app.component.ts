// import { NewsApiService } from "./news-api.service";
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsfeed-app';

  public mArticles:Array<any>=[];
  public mSources:Array<any>=[];

  // constructor(private newsapi:NewsApiService){
  //   console.log('app component constructor called');         
  // }

  // ngOnInit() {
  //       //load articles
  //     this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
  //   //load news sources
  //   this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
  //   }

  // searchArticles(source:any){
  //   console.log("selected source is: "+source);
  //   this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  // }
}
