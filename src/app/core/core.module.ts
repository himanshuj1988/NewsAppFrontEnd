import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExceptionService } from './Exception/exception.service';



@NgModule({
  declarations: [
  ],
  providers:[ExceptionService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
