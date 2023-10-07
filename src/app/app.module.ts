import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';

import {MatMenuModule} from '@angular/material/menu';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list';

import { HttpClientModule } from '@angular/common/http';
import { ExceptionService } from './core/Exception/exception.service';
import { ToastService } from './core/toast/toast.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
    AppComponent, NavMenuComponent, HomeComponent, AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatPaginatorModule,

    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "about", component: AboutComponent }
    ])
  ],
  providers: [ExceptionService,ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
