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

}
