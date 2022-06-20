import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsComponent } from './views.component';
import { HomeComponent } from './home/home.component';
import { NewEntryComponent } from './new-entry/new-entry.component';




const routes: Routes = [
  {
    path : "",
    component: ViewsComponent,
    children : [
      {
        path: "",
        // canActivate : [AuthguardGuard],
        component: HomeComponent,
      },
      {
        path: "new-entry",
        // canActivate : [AuthguardGuard],
        component: NewEntryComponent,
      },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
