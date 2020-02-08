import { PageTitle } from './models/page';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isCollapsed = false;
  menuItems: PageTitle[]
  logoUrl: string;
  siteName: string;
  siteDescription: string;
  constructor(
    private service: DataService,
    private titleService: Title
  ) {

  }

  ngOnInit() {
    this.service.getPageTitle().subscribe((arg)=>{
        this.menuItems = arg;
    })
    this.service.getSiteName().subscribe((arg)=>{
      this.siteName = arg.name;
      this.siteDescription = arg.description;
      this.titleService.setTitle(arg.name+" | "+ arg.description);
    })

  }
}
