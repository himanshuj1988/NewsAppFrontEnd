import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import {MatTableDataSource} from "@angular/material/table"
import { CONFIG } from '../core/config';

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
    private changeDetectorRef: ChangeDetectorRef
  ) {
    
    this.get("");  
debugger
    
  }

  get(searchTerm: string) {
   var contentHeaders = new HttpHeaders()
    .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    this.http
      .get<HackerNewsStory[]>(
        `${this.baseUrl}News?searchTerm=${searchTerm}`
      )
      .subscribe(
        result => {
          debugger
          this.hackerNewsStories = result; 
          
          this.changeDetectorRef.detectChanges();
    this.dataSource=new MatTableDataSource<HackerNewsStory>(this.hackerNewsStories);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
        },
        error => {console.error(error)
          this.hackerNewsStories=null;
        }
       
      );
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


