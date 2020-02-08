import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'blogs',component: BlogComponent},
  { path: 'projects',component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
