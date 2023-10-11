import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import {MatTableDataSource} from "@angular/material/table"
import { CONFIG } from '../core/config';
import { NewsService } from '../Service/news.service';
import { HackerNewsStory } from '../core/modal/hackernewsinterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public hackerNewsStories: HackerNewsStory[]=[];
  private baseUrl= CONFIG.apiUrls.newsall;
  @ViewChild(MatPaginator) paginator: MatPaginator ;
  obs: Observable<any> | undefined;
  dataSource: MatTableDataSource<HackerNewsStory> = new MatTableDataSource<HackerNewsStory>(this.hackerNewsStories);

  constructor(
    private http: HttpClient,
    private changeDetectorRef: ChangeDetectorRef,
    public newsService: NewsService
    
  ) {
    
    this.getNews("");  

    
  }



/*  
Created By :Himanshu Joshi
Created On : 08-10-2023
Description: This function is used to make initial call to the service function to make API call
*/
  getNews(searchTerm: string) {
  this.newsService.getAllNews(searchTerm) .subscribe((newsdata : HackerNewsStory[]) => {  
    if(newsdata.length>0)
    {
    this.hackerNewsStories = newsdata;       
    this.changeDetectorRef.detectChanges();
    this.dataSource=new MatTableDataSource<HackerNewsStory>(this.hackerNewsStories);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
    }
    else
    {
      this.hackerNewsStories=null;
    }
  });

  }

/*  
Created By :Himanshu Joshi
Created On : 08-10-2023
Description: This function is used call API based on search param provided if no parameter 
is provided then all data will be loaded
*/
  search(event: KeyboardEvent) {
    this.getNews((event.target as HTMLTextAreaElement).value);
  }


  /*  
Created By :Himanshu Joshi
Created On : 08-10-2023
Description: This function is used for opening a news article in a new tab with detailed description
*/

  open(url: string) {
    window.open(url, "_blank");
  }
}


