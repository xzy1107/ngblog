import { Post } from './../../models/post.model';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  loading: boolean = true;
  private posts: Post[];

  constructor(
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.dataservice.getRecentPosts().subscribe((arg) => {
      this.posts = arg;
      this.loading = false;
    })
    
    
  }

}
