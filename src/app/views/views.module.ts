import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { ViewsComponent } from './views.component';
import { FormsModule } from '@angular/forms';

import { FrameComponent } from './shared/frame/frame.component';

import { ClickOutsideModule } from 'ng-click-outside';
import { LoaderComponent } from './shared/loader/loader.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    ViewsComponent,
    FrameComponent,
    LoaderComponent,
    NewEntryComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    FormsModule,
    ClickOutsideModule
  ]
})
export class ViewsModule { }
