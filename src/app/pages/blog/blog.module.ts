import { BlogitemModule } from './../../components/blogitem/blogitem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';



@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogitemModule
  ]
})
export class BlogModule { }
