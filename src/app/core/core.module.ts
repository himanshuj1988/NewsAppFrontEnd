import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ExceptionService } from './Exception/exception.service';
import { ToastService } from './toast/toast.service';



@NgModule({
  declarations: [
    ToastComponent
  ],
  providers:[ExceptionService,ToastService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
