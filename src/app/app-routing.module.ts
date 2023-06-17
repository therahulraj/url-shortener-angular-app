import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpenLinkComponent } from './open-link/open-link.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: ':shortUrl', component: OpenLinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
