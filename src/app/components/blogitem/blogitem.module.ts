import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogitemComponent } from './blogitem.component';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [BlogitemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BlogitemComponent
  ]
})
export class BlogitemModule { }
