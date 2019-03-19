import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { D3BasicsComponent } from './d3-basics/d3-basics.component';
import { D3SVGComponent } from './d3-svg/d3-svg.component';
import { DboxComponent } from './dbox/dbox.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IntroComponent
  },
  {
    path: 'd3-intro',
    component: D3BasicsComponent
  },
  {
    path: 'd3-svg',
    component: D3SVGComponent
  },
  {
    path: 'dbox',
    component: DboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
