import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [{
  path:"",
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
  path:"portfolio",
  component:PortfolioComponent
},
{
  path:"contact",
  component:ContactUsComponent
},
{
  path:"resume",
  component:ResumeComponent
},
{
  path:"services",
  component:ServicesComponent
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
