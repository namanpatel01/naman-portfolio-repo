import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [{
  path:"home",
  component:HomeComponent
},{
  path:"home",
  component:HomeComponent
},
{
  path:"about",
  component:AboutComponent
},
{
  path:"projects",
  component:ProjectsComponent
},
{
  path:"contact",
  component:ContactUsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
