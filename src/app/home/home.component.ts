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

  search(event: KeyboardEvent) {
    this.getNews((event.target as HTMLTextAreaElement).value);
  }

  open(url: string) {
    window.open(url, "_blank");
  }
}


