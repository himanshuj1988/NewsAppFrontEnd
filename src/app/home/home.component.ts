import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import {MatTableDataSource} from "@angular/material/table"
import { CONFIG } from '../core/config';
import { NewsService } from '../Service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public hackerNewsStories: HackerNewsStory[]=[];
  private baseUrl= CONFIG.apiUrls.newsall;
  //private baseUrl: string="http://localhost:5121/";
  @ViewChild(MatPaginator) paginator: MatPaginator ;
  obs: Observable<any> | undefined;
  dataSource: MatTableDataSource<HackerNewsStory> = new MatTableDataSource<HackerNewsStory>(this.hackerNewsStories);

  constructor(
    private http: HttpClient,
    private changeDetectorRef: ChangeDetectorRef,
    public newsService: NewsService
  ) {
    
    this.get("");  
debugger
    
  }

  get(searchTerm: string) {
  this.newsService.getAllNews(searchTerm) .subscribe((clientSiteList : HackerNewsStory[]) => {    
            this.hackerNewsStories = clientSiteList;       
          this.changeDetectorRef.detectChanges();
    this.dataSource=new MatTableDataSource<HackerNewsStory>(this.hackerNewsStories);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  });

  }

  search(event: KeyboardEvent) {
    this.get((event.target as HTMLTextAreaElement).value);
  }

  open(url: string) {
    window.open(url, "_blank");
  }
}

interface HackerNewsStory {
  title: string;
  by: string;
  url: string;
}


