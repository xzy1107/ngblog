import { Component, OnInit, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
@Component({
  selector: 'app-blogitem',
  templateUrl: './blogitem.component.html',
  styleUrls: ['./blogitem.component.css']
})
export class BlogitemComponent implements OnInit {
  
  @Input() loading: boolean;
  @Input() post: any[];

  constructor() { }

  ngOnInit() {
    
  }

}
